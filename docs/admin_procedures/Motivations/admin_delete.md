---
id: delete_motivation
title: Deleting Motivations in CAT
sidebar_position: 2
---

## Deleting a Motivation

In the Complianse Assessment Tool (CAT) platform, deleting a Motivation is a **destructive** operation that removes not only the Motivation itself, but **all related context**. This includes assigned principles, criteria, metrics, tests, and their relationships.

> **This action cannot be undone. Proceed with caution.**

---

### Conditions for Deleting a Motivation

A Motivation can be deleted **only if both** of the following conditions are met:

1. **It is in an `UNPUBLISHED` status.**
2. **No assessments have been created using this motivation.**

If either condition fails, the delete operation will be rejected with an error.

---

### Related Content That Will Be Deleted

When you delete a Motivation, the following are also deleted:

- All **Motivation–Actor relations**
- Assigned **Principles**
- Assigned **Criteria**
- Assigned **Metrics**
- Assigned **Tests**
- All **entity-to-entity relations**

> **Shared registry elements** (e.g., a Criterion used in another motivation) are **not deleted**.  
> Only elements **exclusively linked** to the deleted Motivation are removed.---

### Example UI View

import delete_motivation from '/img/motivations/delete_motivation.png';

<p align="center">
<img src={delete_motivation} alt="Delete Motivation UI" />
</p>

> The UI provides confirmation checks before proceeding with deletion.

---

### Not Allowed if Published or Assessed

If a Motivation is published, or if it has been used in at least one Assessment, deletion is **not allowed**.

---

### API Endpoint

| Action | Method | Endpoint |
|--------|--------|----------|
| Delete an unpublished Motivation with no assessments | `DELETE` | `/v1/registry/motivations/{id}` |

---

