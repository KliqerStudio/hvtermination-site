---
title: "GIS Cable Terminations: Plug-In vs. Fluid-Filled and What IEC 62271-209 Covers"
seoTitle: "GIS Cable Terminations and IEC 62271-209 Explained"
description: "How HV cables connect to gas-insulated switchgear: fluid-filled vs dry-type plug-in terminations, the separating barrier, and what the 2019 edition added."
pubDate: 2026-10-30
draft: false
category: "Standards"
tags: ["Standards", "GIS", "Plug-in terminations", "IEC 62271-209"]
image: "/articles/gis-cable-terminations-iec-62271-209.png"
imageAlt: "Diagram of a GIS cable connection: cable insulation, separating insulating barrier and switchgear gas, with fluid-filled and dry-type termination types and the tests added in IEC 62271-209:2019."
---

An outdoor termination has air on one side and cable on the other. A termination into gas-insulated switchgear (GIS) is a different problem: the cable insulation must meet a pressurised gas compartment, and whatever sits between them has to hold the dielectric, the pressure and the seal at the same time. That interface has its own standard, and it is easy to confuse with the cable and accessory standards that govern everything else.

## Where the Termination Ends and the Switchgear Begins

IEC 62271-209 deals with the connection between fluid-filled or extruded cables and gas-insulated metal-enclosed switchgear for rated voltages above 52 kV. Its scope assumes a *separating insulating barrier* between the cable insulation and the gas insulation of the switchgear, and it covers both fluid-filled and dry-type terminations in single- or three-phase arrangements.

The practical consequence is a split of responsibility. The cable and its accessories are qualified against the cable-system standards, such as IEC 60840 and IEC 62067 [discussed in our piece on partial discharge limits](/articles/partial-discharge-testing-terminations/). The interface to the switchgear (the barrier, the flange, the enclosure) is where IEC 62271-209 applies. A procurement specification that cites only one of them leaves a gap exactly at the point where the two supplier scopes meet.

## Fluid-Filled vs. Dry-Type

The standard recognises two termination families.

**Fluid-filled terminations** use an insulating fluid inside the termination body. Filling pressure and minimum function pressure for insulation are among the terms the 2019 edition defines.

**Dry-type terminations** carry no insulating fluid. Field control is provided by the solid components inside the termination, in the same way described for [stress cones and nonlinear field grading materials](/articles/nonlinear-field-grading-materials-stress-cones/). Within this family the 2019 edition adds a specific definition for the **plug-in cable termination**, a design that is pushed into a matching interface on the switchgear rather than built up around an open compartment.

Which is better depends on the project, not on a rule. Plug-in designs are generally chosen where a pre-tested assembly and a repeatable connection matter. Treat any claim of one family being universally superior as marketing, and ask for evidence for your voltage level and switchgear.

## What the 2019 Edition Changed

The second edition (2019) replaced the 2007 first edition as a technical revision. According to the published summaries of the standard, the changes that matter to anyone specifying terminations are:

- a **dielectric type test for plug-in cable terminations**;
- a **pressure type test**;
- a **leak rate test** on the cable termination insulator;
- new definitions for plug-in cable termination, filling pressure and minimum function pressure;
- new clauses on safety practices and on environmental influence of the product;
- an informative annex on the mechanical forces acting on the flange of the cable connection enclosure.

Note what these have in common: leak rate and pressure tests are about the barrier doing its mechanical job, not only its electrical one. A GIS termination can pass a clean partial discharge test and still be a poor design if it leaks gas or cannot take the flange loads.

## Specification Checklist

Before an order is placed, confirm in writing:

1. **Which edition** of IEC 62271-209 applies. A 2007-era type test report does not include the plug-in dielectric, pressure or leak rate tests.
2. **Who owns the interface.** The cable accessory supplier and the switchgear manufacturer must agree on the barrier, the dimensions and the type-test evidence. Do not assume a termination from one maker plugs into another's GIS.
3. **Termination family**: fluid-filled or dry-type, plug-in or not, and what that means for site work.
4. **Flange loads.** Ask for the mechanical forces on the connection enclosure flange, as addressed in the informative annex, and check them against the cable's weight, bending and thermal movement.
5. **Test sensitivity.** As with any PD result, ask for the calibrated sensitivity, the voltage as a multiple of U0 and the standard the threshold comes from.
6. **Site conditions and proof.** Decide what is tested before shipment and what is repeated after installation, and who accepts the result.

## The Takeaway

GIS connections concentrate three disciplines (cable accessories, switchgear and gas handling) at one flange. Most disputes arise because each party tested their own side to their own standard. Specify the interface standard explicitly, require current-edition type-test evidence, and make one party responsible for the combined assembly.

For projects that need terminations and verification handled together, [Reynard](https://reynard.nl/high-voltage-jointing-offshore/) lists offshore cable termination and testing among its services.

Sources: [IEC 62271-209:2019 — High-voltage switchgear and controlgear, Part 209: Cable connections for gas-insulated metal-enclosed switchgear (AFNOR catalogue entry)](https://www.boutique.afnor.org/en-gb/standard/iec-622712092019/highvoltage-switchgear-and-controlgear-part-209-cable-connections-for-gasin/xs134079/253286), [IEC 62271-209:2019 ED2 summary (Genorma)](https://genorma.com/en/standards/iec-62271-209-2019-ed2/amp).
