---
title: "HVDC Cable Terminations: How DC Field Grading and Testing Differ from AC"
seoTitle: "HVDC Cable Terminations: DC Field Grading & Testing"
description: "Why an AC-proven termination design can't be assumed to work on DC: field grading, space charge, polarity reversal and what CIGRE TB 852 requires."
pubDate: 2026-10-23
draft: false
category: "HVDC"
tags: ["HVDC", "Testing", "Standards", "Materials"]
image: "/articles/hvdc-termination-testing-scope.png"
imageAlt: "Voltage scale from 0 to 800 kV showing CIGRE TB 496 covering up to 500 kV, TB 852 covering up to 800 kV, and the HVDC and EHVDC class boundary at 400 kV."
---

A termination exists to manage one problem: cutting back the cable screen concentrates the electric field at the end of the insulation, and something has to spread that stress out. On an AC cable the answer is well understood. On an HVDC cable the same problem has to be solved under different physics, which is why a termination that performs well on AC cannot simply be re-rated for DC.

## Why DC Changes the Field Distribution

Under AC, the field divides across the insulation according to permittivity. Under steady DC it divides according to conductivity instead, and insulation conductivity is not a constant. Published HVDC accessory work notes that insulation resistivity depends on both electric field and temperature, and that these characteristics matter when assessing the field inside accessories ([Jicable'15, General Cable](https://www.jicable.org/TOUT_JICABLE_FIRST_PAGE/2015/2015-A6-4_page1.pdf)).

In practice that means load current matters. A heavily loaded HVDC cable runs warmer at the conductor than at the outer insulation, so conductivity varies across the wall, and the stress pattern can differ from the one the cold, unloaded cable suggests. A termination designed only against its AC field map is being checked against the wrong picture.

## Space Charge and Interfaces

DC insulation can also trap charge. The same Jicable paper notes that space charge buildup can modify the field distribution and cause local overstress, which affects long-term reliability.

Terminations are interface-heavy: cable insulation meets a prefabricated body, a stress control layer, and often a field-grading material. A 2020 laboratory study in *Energies* on XLPE peelings found that rougher surfaces injected more charge once the field exceeded a threshold, and concluded that reducing roughness can limit charge accumulation in HVDC insulation. That is a lab result on samples, not a termination design rule, but it explains why surface preparation and interface quality get scrutiny on DC work that they might not on AC. Field-grading materials with field-dependent conductivity are one tool for managing the stress, as covered in our piece on [nonlinear field grading materials and stress cones](/articles/nonlinear-field-grading-materials-stress-cones/).

## What CIGRE TB 852 Requires

The main reference for qualifying extruded DC cable systems is CIGRE Technical Brochure 852, which updates TB 496 (2012). Its scope extends to rated voltages up to and including 800 kV, covering land and submarine cables and their accessories. It splits requirements into two classes: HVDC (up to 400 kV and average stress up to 20 kV/mm) and EHVDC (above 400 kV, or above 20 kV/mm).

For accessories, the brochure states that all components, cable and accessories included, undergo type testing. Prequalification is a one-year test combining thermal load cycles, high load, zero load, superimposed impulses and, for line-commutated converter systems only, polarity reversal. Routine tests call for DC testing of the main insulation of prefabricated accessories, with an AC test plus partial discharge measurement recommended. After installation, the brochure lists a high-voltage test of the main insulation and a voltage test of the screen insulation.

It also carries an honest caveat: limited operating experience above 400 kV means future revisions may be needed. A specification written today should treat the highest voltage classes as still maturing.

## Where AC Practice Still Carries Over

Not everything changes. Workmanship, cleanliness and geometry still decide whether a termination reaches service. [Partial discharge verification](/articles/partial-discharge-testing-terminations/) remains the practical way to catch installation damage before energisation, and TB 852's recommendation of AC plus PD for factory-testing prefabricated accessories shows the AC toolbox has not been discarded.

## A Practical Checklist for HVDC Termination Specifications

- State the converter type (LCC or VSC), because polarity reversal requirements follow from it.
- Ask for qualification evidence against TB 852 (or the project's named standard) at the actual voltage class, not an AC type test.
- Request the design basis for the DC field calculation, including the temperature and load assumptions used.
- Confirm that interface and surface-preparation procedures are written down and auditable.
- Require stated test voltage, duration and PD sensitivity in every report, not a bare pass.
- Define the after-installation test regime in the contract, before the first termination is made.

Jointers and test crews also need to be set up for the voltage in question. [Reynard](https://reynard.nl/high-voltage-jointing-offshore/) states on its site that its teams support systems from 33 kV array cables through 525 kV transmission and HVDC infrastructure, which is the kind of scope worth confirming against your own project's voltage and converter arrangement.

Sources: [CIGRE TB 852 — Recommendations for testing DC extruded cable systems up to and including 800 kV](https://electra.cigre.org/319-december-2021/technical-brochures/recommendations-for-testing-dc-extruded-cable-systems-for-power-transmission-at-a-rated-voltage-up-to-and-including-800-kv.html), [Pauparden, Mammeri & Lecourtier — 345kV DC XLPE Extruded Cable Systems Development (Jicable'15)](https://www.jicable.org/TOUT_JICABLE_FIRST_PAGE/2015/2015-A6-4_page1.pdf), [Doedens et al. — Space Charge Accumulation at Material Interfaces in HVDC Cable Insulation, Part I (Energies, 2020)](https://research.chalmers.se/publication/516914/file/516914_Fulltext.pdf).
