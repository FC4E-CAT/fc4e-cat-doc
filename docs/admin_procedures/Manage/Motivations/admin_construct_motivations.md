---
id: admin_construct_motivations
title: Admin / Build Motivations
sidebar_position: 2
---

# Admin / Build Motivations

## Overview

Once a motivation is created, administrators can enrich it by assigning **Criteria**, **Tests**, and **Actors**. To begin, click the  
![](/img/manage/admin_motivations/motivation_view_button.png)  
button to access the **Motivation Details** page.

<p align="center">

  ![](/img/manage/admin_motivations/motivation_display_page.png)
</p>

---

## Step 1: Add Actor

The first step in constructing a motivation is to add the **Actor** to whom the assessment applies. Click the **Add Actor** button:

<p align="center">

  ![](/img/manage/admin_motivations/motivation_add_actor_button.png)
</p>

A modal window will appear:

- Select an **Actor** from the list.
- Click the **Create** button to assign the actor to the motivation.

You will be redirected to the **Motivation Builder**, where you can assign **Principles**, **Criteria**, and **Tests** to the selected actor.

<p align="center">

  ![](/img/manage/admin_motivations/motivation_builder.png)
</p>

The builder interface is divided into three main sections:

- **Structure**: Select the element to construct.
- **Preview**: View current progress.
- **Builder**: Fill in details for the selected element.

---

## Step 2: Add Criterion

To add a criterion:

1. Go to the **Structure** section.
2. Click the **Add Criterion** button.
3. The **Builder** section will be enabled.

You can either create a new criterion or select an existing one.

---

### Create a New Criterion

In the **New** tab of the Builder:

<p align="center">

  ![](/img/manage/admin_motivations/motivation_builder.png)
</p>

Fill in the following fields:

- **Cri** (required): Acronym for the criterion.
- **Label** (required): Name of the criterion.
- **Description** (optional): Short description.
- **Imperative**: Indicates if the criterion is mandatory or optional.
- **Tag with Principle** (optional): Assign an existing principle.

Click **Create Criterion** to save. The new criterion will appear in the **Preview** section.

<p align="center">

  ![](/img/manage/admin_motivations/motivation_criterion_preview.png)
</p>

---

### Select an Existing Criterion

Switch to the **Select** tab in the Builder:

<p align="center">
  ![](/img/manage/admin_motivations/motivation_builder_select.png)

</p>

- Choose a criterion from the list.
- Click **Select Criterion** to add it to the motivation.

---

### Edit an Existing criterion
To edit an existing criterion select from **Builder** section the **Edit** tab
There you can edit any of the fields of the criterion . Click **Update Criterion** to update. 

<p align="center">
  ![](/img/manage/admin_motivations/motivation_criterion_edit.png)

</p>

## Step 3: Add Principle to Criterion

To add a principle to a criterion:

1. In the **Structure** section, select a criterion.
2. In the **Preview** section, click **Add a Principle**.
3. The **Builder** section will activate.

You can create a new principle or select an existing one.

---

### Create a New Principle

In the **New** tab of the Builder:

<p align="center">

  ![](/img/manage/admin_motivations/motivation_builder_principle.png)
</p>

Fill in the following fields:

- **Pri** (required): Acronym of the principle.
- **Label** (required): Name of the principle.
- **Description** (optional): Short description.

Click the **Create Principle** button to save.

Once created, the **Edit** tab in the **Criterion** builder becomes available:

- Select the newly created principle from the list.
- Click **Update Criterion** to assign it to the selected criterion.

<p align="center">
  ![](/img/manage/admin_motivations/motivation_assign_principle.png)
</p>

The **Preview** section updates to reflect the assigned principle:


<p align="center">

  ![](/img/manage/admin_motivations/motivation_updated_criterion.png)
  
</p>

---

### Select an Existing Principle

In the **Select** tab of the Builder:

<p align="center">

  ![](/img/manage/admin_motivations/motivation_builder_select.png)
</p>

- Choose a principle from the list.
- Click the **Select Criterion** button to assign it to the criterion.



## Step 4: Edit Advanced Settings

A criterion by default has a **Simple Sum** algorithm type, **Binary-Binary** benchmark type
and **1** benchmark value, as these are the most commonly used values for the criteria. 
But maybe this need to change and different type of tests may consist the criterion. 
To change this click on **Advanced Settings**    ![](/img/manage/admin_motivations/motivation_advanced_settings_button.png) and edit the values. Click **Save configuration** to save the changes.


By default, a criterion uses the **Simple Sum** algorithm type, **Binary-Binary** benchmark type, and a benchmark value of **1**, as these are the most commonly applied settings. However, depending on the type of tests consisting the criterion, you may need to adjust these values. To do so, click on **Advanced Settings** 
  ![](/img/manage/admin_motivations/motivation_advanced_settings_button.png), modify the necessary fields, and then click **Save Configuration** to apply your changes.

<p align="center">

  ![](/img/manage/admin_motivations/motivation_advanced_settings.png)
</p>

