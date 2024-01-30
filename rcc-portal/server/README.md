# Rcc portal

## users

| **Field**     | **Type**     |
| ------------- | ------------ |
| user_id (PK)  | int          |
| first_name    | varchar(255) |
| last_name     | varchar(255) |
| rollno        | varchar(20)  |
| phone_no      | varchar(15)  |
| email_id      | varchar(255) |
| password      | varchar(128) |
| course        | varchar(20)  |
| department    | varchar(20)  |
| semester      | varchar(20)  |
| section       | varchar(20)  |
| clan          | varchar(20)  |
| m_id (FK)     | int          |
| is_active     | tinyint(2)   |
| admin_status  | int(2)       |
| forget_token  | varchar(255) |
| refresh_token | varchar(255) |
| created_at    | datetime     |
| updated_at    | datetime     |

- course (Eg: BTech, BBA, BEd, etc)
- department (Eg: CST, ECE, MECH, etc)

<br>

## events

| **Field**         | **Type**     |
| ----------------- | ------------ |
| e_id (PK)         | int          |
| e_name            | varchar(255) |
| e_organizer       | varchar(255) |
| e_desc            | text         |
| e_img             | varchar(255) |
| e_status          | varchar(20)  |
| e_date            | datetime     |
| e_venue           | varchar(255) |
| e_judges          | array        |
| e_winners         | array        |
| participant_count | int          |
| created_at        | datetime     |
| updated_at        | datetime     |

<br>

## mentors

| **Field**  | **Type**     |
| ---------- | ------------ |
| m_id       | int          |
| m_name     | varchar(255) |
| m_email    | varchar(255) |
| m_number   | varchar(15)  |
| m_dept     | varchar(50)  |
| created_at | datetime     |

> User signup

```json
{
  "first_name": "Sanchit",
  "last_name": "Bajaj",
  "rollno": "2K19CSUN01108",
  "phone_no": "8743811303",
  "email_id": "sanchit_bajaj2019@manavrachna.net",
  "password": "root",
  "course": "BTECH",
  "department": "CSE",
  "semester": "6",
  "section": "D",
  "clan": "Forest Rhinos",
  "m_id": 1
}
```

> User login

```json
{
  "rollno": "2K19CSUN01108",
  "password": "root"
}
```
