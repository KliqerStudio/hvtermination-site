---
title: "IEC 60840 vs IEC 62067: Which Standard Applies to Your HV Cable Termination?"
seoTitle: "IEC 60840 vs IEC 62067: Termination Standards"
description: "IEC 60840 covers extruded cable systems above 30 kV to 150 kV, IEC 62067 above 150 kV to 500 kV. Learn how the voltage split and exclusions affect terminations."
pubDate: 2026-11-06
draft: false
category: "Standards"
tags: ["Standards", "IEC 60840", "IEC 62067", "Terminations", "Type testing"]
image: "/articles/iec-60840-vs-iec-62067.png"
imageAlt: "Voltage-axis diagram: IEC 60840 spans above 30 kV (Um 36 kV) to 150 kV (Um 170 kV), IEC 62067 spans above 150 kV to 500 kV (Um 550 kV), with submarine cables marked as outside both scopes."
---

When a specification says a termination must be "tested to IEC", the first question is which IEC. For extruded-insulation high-voltage cable systems, two standards split the territory by voltage, and choosing the wrong one, or assuming one covers a case it explicitly excludes, is a common source of procurement disputes.

## The voltage split

IEC 60840 applies to power cables with extruded insulation and their accessories for rated voltages above 30 kV (Um = 36 kV) up to and including 150 kV (Um = 170 kV). The current edition is the fifth, published in 2020, replacing the 2011 edition; a consolidated 5.1 version incorporates Amendment 1.

IEC 62067 picks up where that one stops: rated voltages above 150 kV (Um = 170 kV) up to and including 500 kV (Um = 550 kV). Its third edition dates from 2022 and replaces the 2011 edition.

Both standards define test methods and requirements for complete cable systems, for cables on their own, and for accessories (terminations and joints) on their own. They apply to fixed installations under typical installation and operating conditions.

Note the vocabulary: the ranges are written against Um, the highest system voltage, not only the nominal figure. A "132 kV" system sits in IEC 60840 territory; a "220 kV" system sits in IEC 62067 territory. Always confirm the Um and rated voltages (U0/U) in the project specification rather than relying on a rounded label.

## What both standards leave out

Two exclusions matter for terminations.

First, special cables such as submarine types, and their accessories, are outside the scope of both standards. They may need modified tests or special test set-ups. Submarine cables with extruded insulation have their own standard, IEC 63026, which addresses rated voltages from 6 kV to 60 kV.

Second, transition joints between extruded-insulation cables and paper-insulated cables are excluded. Terminations on legacy paper-insulated or fluid-filled systems therefore need a separate basis for qualification.

## Why it matters for terminations

A termination is qualified as part of a cable system or as an accessory in its own right, and the applicable standard decides which prequalification, type and routine test programme the supplier must evidence. Three practical consequences follow:

- **Evidence must match the voltage class.** A type-test report issued against one standard does not automatically demonstrate compliance with the other, because the test programme and voltage levels differ by class.
- **Edition dates matter.** Test reports issued against an older edition may not cover changes introduced since. Ask which edition the report was issued against.
- **Environment-specific designs need care.** Outdoor sealing ends, GIS connections and transformer connections each carry additional interface requirements. For GIS, see our guide to [GIS cable terminations and IEC 62271-209](/articles/gis-cable-terminations-iec-62271-209-plug-in/).

## Type testing is not the end of the story

Standards-based type and routine tests demonstrate that a design and a factory product are sound. They do not prove that a particular termination was built correctly on site. After-installation testing and partial discharge measurement address that gap; our article on [partial discharge testing for terminations](/articles/partial-discharge-testing-terminations/) explains what a meaningful result looks like.

## Specification checklist

Before issuing or accepting a termination specification, confirm:

1. The system Um and rated voltage, and therefore which standard applies.
2. The edition of the standard cited, and the date of the supplier's test reports.
3. Whether the application falls into an exclusion (submarine, paper-insulated transition).
4. Whether prequalification evidence exists for the exact cable and termination combination, not just each component separately.
5. What after-installation tests and PD sensitivity are required on site.
6. Which party owns the interface, for instance at GIS or transformer connections.

If the project involves offshore installation, onsite termination and testing capacity is part of the delivery picture; [Reynard](https://reynard.nl/high-voltage-testing/) lists VLF, AC resonance and partial discharge testing among its services.

Sources: [IEC 60840:2020 catalogue entry (iTeh)](https://iteh.es/catalog/standards/iec/6d8fc11c-a744-4396-964b-85e5a3923d97/iec-60840-2020), [IEC 62067:2022 catalogue entry (SIS)](https://www.sis.se/en/produkter/electrical-engineering/electrical-wires-and-cables/cables/iec-620672022/), [IEC 63026:2019 catalogue entry (iTeh)](https://iteh.es/catalog/standards/iec/0f5872bb-b345-486e-937f-5c441f13004f/iec-63026-2019).
