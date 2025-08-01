---
id: admin_create_motivations
title: Admin / Create Motivations
sidebar_position: 1
---

## Create Motivations

To create a new motivation administrator should select Motivation from the Library menu at the left of the page.

<p align="center">
  ![](/img/manage/admin_motivations/motivation_library_menu.png)
</p>

This action guides administrator to the motivations page where a list of motivations is displayed.
<p align="center">
  ![](/img/manage/admin_motivations/motivation_display_list.png)
</p>

The administrator can create a new motivation by clicking on the **Create New** button.
<p align="center">
  ![](/img/manage/admin_motivations/motivation_create_new.png)
</p>

A modal window pops up permitting administrator to add the motivation details:


**MTV** an acronym representing the motivation (should be unique)
**Label** The name of the motivation 
**Type** The type of the motivation, select from a list of values
**Description** The description of the motivation
<p align="center">
  ![](/img/manage/admin_motivations/motivation_create_modal.png)
</p>

When the details are filled, the administrator can create the motivation by clicking **Create** button

The created motivation is added to the list of the motivations

<p align="center">
  ![](/img/manage/admin_motivations/motivation_created.png)
</p>


Note : 
If the guidelines of the actor are coded to a group of automated tests , that are checked altogether 
we need to define the group details while assigning the actor to the motivation.
Select **Add Group Test** to open add the group details.
Select **Test Method** from the list. 
Define **Endpoint** url , which defines where the response will be received to check the test compliance

Set the **Parameter** that is needed to the endpoint request 
- **Parameter Type** , **Assessment Reference** if received from assessment or **Value** if given from the user.
**Name** , the name of the parameter
**Assessment Reference** , where the parameter will be found in the assessment.

