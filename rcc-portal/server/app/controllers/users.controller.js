const db = require("../models");
const Users = db.users;
const Mentors = db.mentors;

const bcrypt = require("bcrypt");
const saltRounds = 10;

const { generateToken } = require("../middleware/token");

const register = async (req, res) => {
  try {
    const data = req.body;

    const checkUserExist = await Users.findOne({
      where: {
        rollno: data.rollno.toUpperCase(),
      },
    });

    if (!checkUserExist) {
      const hashPassword = bcrypt.hashSync(data.password, saltRounds);

      const user = {
        first_name: data.first_name,
        last_name: data.last_name,
        rollno: data.rollno.toUpperCase(),
        phone_no: data.phone_no,
        email_id: data.email_id,
        password: hashPassword,
        course: data.course,
        department: data.department,
        semester: data.semester,
        section: data.section,
        clan: data.clan,
        m_id: data.m_id,
      };

      const userData = await Users.create(user);
      console.log(userData);
      res.status(200).json({
        message: "user registered successfully",
      });
    } else {
      res.status(400).json({
        message: "user already exists",
      });
    }
  } catch (error) {
    res.status(400).json({
      message: "Error registering user",
      error: error,
    });
  }
};

const login = async (req, res) => {
  try {
    const { rollno, password } = req.body;
    const checkUserExist = await Users.findOne({
      where: {
        rollno: rollno,
      },
    });

    if (checkUserExist) {
      const checkPassword = bcrypt.compareSync(
        password,
        checkUserExist.password
      );
      if (checkPassword) {
        const generatedToken = generateToken(checkUserExist.user_id);

        res.status(200).json({
          message: "user logged in successfully",
          user: checkUserExist,
          token: generatedToken,
        });
      } else {
        res.status(400).json({
          message: "invalid password",
        });
      }
    } else {
      res.status(400).json({
        message: "user not exist in the database",
      });
    }
  } catch (error) {
    res.status(400).json({
      message: "Error logging user",
      error,
    });
  }
};

const deleteAccount = async (req, res) => {
  try {
    const id = req.params.id;

    const checkUserExist = await Users.findOne({
      where: {
        user_id: id,
      },
    });

    if (checkUserExist) {
      await Users.update(
        { is_active: 0 },
        {
          where: {
            user_id: id,
          },
        }
      );
      res.status(201).json({
        message: "user deleted successfully",
      });
    } else {
      res.status(400).json({
        message: "user not exist in the database",
      });
    }
  } catch (error) {
    res.status(400).json({
      message: "Error deleting user",
      error,
    });
  }
};

const updateAdminStatus = async (req, res) => {
  try {
    const id = req.params.id;

    const checkUserExist = await Users.findOne({
      where: {
        user_id: id,
      },
    });

    if (checkUserExist) {
      await Users.update(
        { admin_status: true },
        {
          where: {
            user_id: id,
          },
        }
      );
      res.status(201).json({
        message: "user updated successfully",
      });
    } else {
      res.status(400).json({
        message: "user not exist in the database",
      });
    }
  } catch (error) {
    res.status(400).json({
      message: "Error updating user",
      error,
    });
  }
};

const getAllUsers = async (req, res) => {
  try {
    const authTokenID = req.tokenData.user_id;
    const checkValidUser = await Users.findOne({
      where: {
        user_id: authTokenID,
        admin_status: 1,
        is_active: 1,
      },
    });

    if (checkValidUser) {
      const allUsers = await Users.findAll({
        where: {
          is_active: 1,
          admin_status: 0,
        },
        order: [["user_id", "DESC"]],
      });
      res.status(200).json({
        message: "all members of RCC",
        allUsers: allUsers,
      });
    } else {
      res.status(400).json({
        message: "only admin can request all memebers",
      });
    }
  } catch (error) {
    res.status(400).json({
      message: "Error getting users",
      error,
    });
  }
};

const getUser = async (req, res) => {
  try {
    const rno = req.params.rno;

    const authTokenID = req.tokenData.user_id;

    const checkValidUser = await Users.findOne({
      where: {
        user_id: authTokenID,
        admin_status: 1,
        is_active: 1,
      },
    });

    if (checkValidUser) {
      const checkUserExist = await Users.findOne({
        where: {
          rollno: rno,
          is_active: 1,
        },
      });

      if (checkUserExist) {
        const mentorData = await Mentors.findOne({
          where: {
            m_id: checkUserExist.m_id,
            is_active: 1,
          },
        });

        if (mentorData) {
          res.status(200).json({
            message: "user found",
            searchedUserData: {
              studentID: checkUserExist.user_id,
              firstName: checkUserExist.first_name,
              lastName: checkUserExist.last_name,
              rollno: checkUserExist.rollno,
              emailId: checkUserExist.email_id,
              course: checkUserExist.course,
              department: checkUserExist.department,
              semester: checkUserExist.semester,
              section: checkUserExist.section,
              mentorID: mentorData.m_id,
              mentorName: mentorData.m_name,
              mentorEmail: mentorData.m_email,
            },
          });
        } else {
          res.status(400).json({
            message: "Searched rollno doesnot exist 01",
          });
        }
      } else {
        res.status(400).json({
          message: "Searched rollno doesnot exist 02",
        });
      }
    } else {
      res.status(400).json({
        message: "don't have right to use this request",
      });
    }
  } catch (error) {
    res.status(400).json({
      message: "Error getting user",
      error,
    });
  }
};

module.exports = {
  register,
  login,
  deleteAccount,
  updateAdminStatus,
  getUser,
  getAllUsers,
};
