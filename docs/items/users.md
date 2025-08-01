---
id: users
title: Users 
sidebar_position: 1
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Users in CAT 

The Compliance Assessment Toolkit (CAT) supports different types of users, actors, and roles. Based on the type of user, different actions can be performed in the service. It supports both authentication and authorization mechanisms:

- **Authentication** is the process of determining the identity of a client, which is typically a user account.
- **Authorization** is the process of determining what permissions an authenticated identity has on a set of specified resources.

CAT is integrated with a Federated AAI so users can log in via their academic or social ID. 

## Type of Users

CAT supports the following types of users:

- **Casual User / General Public**: Users who search and explore existing evaluation records, statistics, and guidance related to compliance.
- **Identified User**: Users who wish to save preferences or context. A globally unique identifier is required, but no other information is necessary.
- **Validated User**: Users who contribute external evaluations or self-assessments. These users may also seek additional guidance and best practices.
- **Admin User**: Users who manage vocabularies, user accounts, and databases associated with CAT.

To perform an assessment on behalf of an organization, a user must **"request validation"**, becoming an **actor**. This is described below.

The types of **actors** supported in CAT are organized under two domains:

<Tabs>
  <TabItem value="pid" label="PID" default>

| Name | Description |
|------|-------------|
| **PID Scheme (Component)** | Defines rules and standards for PIDs, including format, metadata, usage rights, and algorithmic enforcement. |
| **PID Authority (Role)** | Maintains the rules and standards for PID integrity, such as uniqueness and compliance. May include centralized or decentralized organizations. |
| **PID Service Provider (Role)** | Offers PID services aligned with PID Schemes and Authority, including issuing, resolving, and managing PIDs. |
| **Multi-Primary Administrator (MPA) (Role)** | Operates GHR Services under DONA Foundation Policies and coordinates with other MPAs in a distributed infrastructure. |
| **PID Service (Component)** | Core and advanced services for creating, resolving, and managing PIDs and their kernel information. |
| **PID Manager (Role)** | Ensures integrity of PID-entity relationships and leverages PID services to support PID Owners. |
| **PID Owner (Role)** | Responsible for assigning and maintaining PIDs for entities. Authority may be transferred when needed. |
| **End User (Role)** | The ultimate users of PID services, including researchers, software, or support services. |
| **Compliance Monitoring (Role)** | Organizations that monitor/enforce PID Policy compliance and generate interoperable compliance metrics. |

  </TabItem>

  <TabItem value="aarc" label="AARC">

| Name | Description |
|------|-------------|
| **AAI Service Provider (Role)** | Manages Authentication and Authorization Infrastructure (AAI) for secure access to research resources. Follows the [AARC Blueprint Architecture](https://aarc-community.org/architecture/) for interoperability and policy compliance. |

  </TabItem>
</Tabs>

