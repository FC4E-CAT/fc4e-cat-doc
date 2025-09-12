---
id: admin_dashboard
title: Admin Dashboard
sidebar_position: 1
---

# Dashboard

The Dashboard provides a **centralized overview** to help administrators. It is designed primarily for **monitoring and management**, while actions such as editing, validating, or deleting data are carried out through the linked management sections.

import dashboard from '/img/library/dashboard/dashboard.png';

<p align="center">

<img src={dashboard} alt="Dashboard Image" />
</p>


Through the dashboard, administrators can:

- Monitor user activity and role assignments
- Manage validation workflows
- Track assessment statistics
- Track assessment distribution across user roles
---

## Role-Based Status

This section shows the number of users across different roles in the platform (e.g., Validated, Identified, Banned). From here, administrators can view and manage all registered users, update their roles, or suspend accounts if necessary.

import role_based_status from '/img/library/dashboard/role_based_status.png';

<p align="center">

<img src={role_based_status} alt="Role Based Status" style={{width: 500}} />
</p>

---

## Validations Status

This section tracks the state of user validations, including those that are already validated, rejected, or still pending. Administrators must review pending requests and either approve or reject them to keep the system up to date.

import validation_status from '/img/library/dashboard/validation_status.png';

<p align="center">

<img src={validation_status} alt="Validation Status" style={{width: 500}} />
</p>

---

## Assessments Status

The dashboard summarizes assessment activity, including the total number of assessments and their visibility (Public vs Private). Administrators can review assessment records, adjust their visibility, or remove outdated entries when necessary.

import assessment_status from '/img/library/dashboard/assessment_status.png';

<p align="center">

<img src={assessment_status} alt="Assessment Status" style={{width: 500}} />
</p>

---

## Assessment Distribution by Role

This section breaks down assessments by the **role of the submitting user** (e.g., PID Manager, PID Service Provider, PID Owner). It helps administrators understand how different roles contribute to assessment activity across the platform.

import assessment_distribution from '/img/library/dashboard/assessment_distribution.png';

<p align="center">

<img src={assessment_distribution} alt="Assessment Distribution" style={{width: 500}} />
</p>

---