---
id: zenodo_get_deposit
title: Retrieve Deposit Information from Zenodo
sidebar_position: 4
---


# Retrieving Deposit Information from Zenodo

CAT Service provides users with the ability to retrieve detailed metadata about deposits stored in Zenodo. The following information is available for each deposit:

## Available Metadata

The metadata includes the following details about the deposit:

- **Deposit ID**: Unique identifier for the deposit in Zenodo.
- **Deposit Title**: The title of the deposited item.
- **Deposit Description**: A brief description of the deposit.
- **Deposit Creation Date**: The date when the deposit was created in Zenodo.
- **Submission Status**: The current status of the deposit submission on Zenodo.
- **Deposit Publication Date**: The date the deposit was officially published on Zenodo.
- **Deposit Creators**: List of creators associated with the deposit (Name, ORCID if available).
- **Deposit Contributors**: List of contributors to the deposit (Name, ORCID if available).
- **Uploaded Files**: Details of files uploaded as part of the deposit (File Name, File Size, File URL).

## Access Control Policies

Access to deposit information is subject to the following policies:

- **Published Deposits**: If a deposit has been successfully published on Zenodo, its metadata is publicly accessible. No authentication is required for users to access this information, regardless of whether they are registered with CAT Service.
  
- **Draft Deposits**: If a deposit is still in draft state on Zenodo, access is restricted. Only users who are authenticated and validated with CAT Service can retrieve metadata about draft deposits.

These access policies ensure that users can efficiently retrieve metadata while maintaining appropriate access control for draft deposits.


