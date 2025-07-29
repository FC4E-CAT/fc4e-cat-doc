---
id: assessments
title: Motivations/Assessments
sidebar_position: 4
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


## Compliance Assessments in CAT 
<p>In CAT, a Compliance Assessment is considered as the process of determining to what extent a service, object, organisation, or capabilities comply with a set of criteria, based on reproducible tests. <br/>Validated users can contribute external assessments or contribute a self-assessment. </p>

#### Verification of a Compliance Assessment
##### Principles and Criteria 
<p>Compliance assessment is considered successful if it complies with a minimum set of standards.</p>
<p>These standards (Principles) differ depending on the motivation that guides the necessity of the assessment. </p>

Principles contain a set of <b>MANDATORY</b> criteria that need to be to be satisfied, in order to decide it's success as well as a set of <b>OPTIONAL</b> criteria, that support further the compliance of the assessment. The criteria can be considered as properties that signify a principle and  serve to verify that principles are adhered. The criteria that fulfill the principle, depend upon the role of the user in the ecosystem.

<Tabs>
  <TabItem value="pid" label="PID" default>
  <p>

###### Example -PID Policy

For example, in CAT, the Motivation is to develop and apply Policy to manage the quality and use of PIDs in EOSC. An assessment complies with this policy (PID Policy), if a set of Principles is fulfilled.
For example, an assessment submitted by a PID Owner, should comply PID Application principle, securing unambiguous ownership, proper maintenance, and unambiguous identification of the entity being referenced. So in order to decide that this principle is fulfilled, a set of criteria should succeed, determined by the PID Owner role. In our case, Measurement criterio should succeed (MANDATORY), ensuring that the infrastructure SHOULD make all processes and operations transparent (within the constraints of privacy laws).
</p>
##### Metrics and Tests

<p> To decide that the criteria comply and the principles are adhered, metrics are introduced that represent the actual performance against a goal (Benchmark). Ideally metrics should be reproducibly measurable by anyone, and preferably quantitatively, but in some cases one cannot avoid qualitative measures. </p>
<p> A metric is measured using one or more <b>Tests</b>. Test results are then compared to <b>Benchmarks</b> (Standards) to contextualise performance. </p>
<p> While submitting the compliance assessment/self-assessment the user needs to answer to tests and provide proofs, in order to achieve the success of the criterio.</p>
<p> Guidelines and best practices are provided to support each test, and help the user to decide actions in order to comply with the required standards.</p>

#### Compliance Assessment Visibility
<p> A Compliance Assessment can be <b>private</b> (user-owned) or <b>public</b> and upon this depends it's visibility through the CAT Service.A public assessment is an assessment published to zenodo. This is a feature that will be implemented in the near future. </p>

<p> In the example of PID Policy, the Measurement criterio succeeds, if a test determining that the entity (PID) attributes are being maintained, passes the defined benchmark(YES/NO). The user can provide evidence to support the answer. </p>

<b> Example of an assessment, of a PID Owner actor, complying with the standards. </b>
![](/img/assessments/pidowner_policy_succeed.png) 


<b> Example of an assessment, of a PID Owner actor, failing with the standards. </b>
![](/img/assessments/pidowner_policy_fail.png) 

</TabItem>
 <TabItem value="aarc" label="AARC">
  <p>

###### Example AARC-G069 Policy
For example, in CAT, the Motivation is to develop and apply Policy to check the compliance of AAI services with AARC Guideliness. An assessment complies with this policy (e.g AARC-G069), if a set of Principles is fulfilled.
For example, an assessment submitted by an AAI Service Provider, should comply with AARC-G069 guidelines by responding on how AARC BPA-compliant AAI services express group membership and role information using a URN namespace.

</p>
##### Metrics and Tests

<p> To decide that the criteria comply and the principles are adhered, metrics are introduced that represent the actual performance against a goal (Benchmark). Ideally metrics should be reproducibly measurable by anyone, and preferably quantitatively, but in some cases one cannot avoid qualitative measures. </p>
<p> A metric is measured using one or more <b>Tests</b>. Test results are then compared to <b>Benchmarks</b> (Standards) to contextualise performance. </p>
<p> While submitting the compliance assessment/self-assessment the user needs to answer to tests and provide proofs, in order to achieve the success of the criterio.</p>
<p> Guidelines and best practices are provided to support each test, and help the user to decide actions in order to comply with the required standards.</p>

#### Compliance Assessment Visibility
<p> A Compliance Assessment can be <b>private</b> (user-owned) or <b>public</b> and upon this depends it's visibility through the CAT Service.A public assessment is an assessment published to zenodo. This is a feature that will be implemented in the near future. </p>

<p> In the example of AARC G069 Policy, the  OpenID Connect UserInfo criterio succeeds, if a test determines that the OpenID Connect UserInfo endpoint of the AAI service returns Group and Role information within the entitlements claim </p>

<b> Example of an assessment complying with the standards of AARC-G069. </b>
![](/img/assessments/aarc_assessment_create_step_3_c.png) 


</TabItem>


</Tabs>
