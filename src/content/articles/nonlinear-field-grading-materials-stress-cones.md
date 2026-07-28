---
title: "Nonlinear Field Grading: How FGM Stress Cones Actually Work"
seoTitle: "Nonlinear Field Grading Materials Explained"
description: "The geometric stress cone has been the default fix for field crowding at a cable termination for a century. Nonlinear field grading materials attack the same problem chemically instead."
pubDate: 2026-07-22
draft: false
category: "R&D"
tags: ["Materials", "R&D"]
image: "/articles/nonlinear-field-grading.png"
imageAlt: "Diagram comparing geometric stress cone shaping to nonlinear field grading material distribution at a cable termination."
---

Cut into a shielded HV cable to build a termination and you create a problem the cable's designers spent the rest of the cable's length avoiding: the semiconducting screen ends abruptly, and the electric field that was evenly distributed along the cable crowds violently at that cut edge. Left alone, the field concentration at the screen terminus is high enough to cause partial discharge and, eventually, insulation breakdown. Every termination method is really just a different answer to the same question — how do you spread that field back out before it breaks something.

## The Geometric Answer

The oldest and still most common fix is purely geometric: flare the ground screen outward into a cone shape, so the transition from screened to unscreened cable happens gradually over distance instead of at a sharp edge. This is the stress cone in its classical form, and it remains the dominant, well-proven approach above roughly 400kV, where the margins for error shrink and a simple, physically robust solution has a long track record to justify it. Its limitation is size: spreading the field out geometrically takes physical space, which is part of why terminations get visibly larger as voltage class increases.

## The Chemical Answer

Nonlinear field grading materials (FGMs) take a different approach entirely: instead of reshaping the field with geometry, they reshape it with a material whose electrical conductivity changes with the field strength itself. A typical FGM is a silicone or EPDM matrix filled with a microvaristor powder — commonly zinc oxide (ZnO) or silicon carbide (SiC) particles — engineered so the compound's conductivity stays low under normal field conditions but rises sharply once local field strength crosses a threshold. In practice, that means the material is largely inert everywhere along the termination except at the exact points where field crowding would otherwise occur, where it becomes conductive enough to bleed off and redistribute the concentration. Composite FGM layers can be built up through methods like centrifugal casting or, increasingly, 3D printing, to create a deliberate gradient in the material's properties rather than a uniform mix.

## Why This Matters More at Higher Voltage Classes

The core engineering problem FGMs solve — the mismatch in dielectric properties between a cable's main insulation and the accessory material used to build the termination around it — gets worse, not better, as voltage class rises. A geometric stress cone that works fine at 66kV needs to be proportionally larger to manage the same relative field stress at 275kV or 550kV, and at some point the physical size becomes impractical for a compact, factory-buildable accessory. Nonlinear FGM compounds let manufacturers hold termination size down while still controlling field stress, which is a meaningful part of why FGM research has concentrated around the top of the voltage class range rather than at distribution voltages, where geometric solutions remain simpler and cheaper.

## Neither Approach Has Fully Replaced the Other

In practice, most modern slip-on and pre-molded terminations use some combination: a capacitive or refractive grading layer (a high-permittivity material that steers the field electrically rather than by shape) handles routine field control, while geometric shaping and, increasingly, nonlinear FGM elements manage the highest-stress regions. The interesting research question isn't whether nonlinear grading will replace the century-old stress cone — it's how much further material science can shrink the geometric solution before a termination becomes something closer to a small, purpose-built electronic component than a mechanical accessory. Whichever grading method is used, the only way to confirm it actually worked is partial discharge testing after the fact; [Reynard](https://reynard.nl/high-voltage-testing/) runs PD detection as a standard part of verifying a termination before it's accepted into service.

Sources: [Research on nonlinear field grading composites for cable terminals](https://www.researchgate.net/publication/322260967_Grading_electric_field_in_high_voltage_insulation_using_composite_materials), [Tuning potential distribution with nonlinear conductivity stress cones](https://www.researchgate.net/publication/321328836_Tuning_the_potential_distribution_of_AC_cable_terminals_by_stress_cone_of_nonlinear_conductivity_material).
