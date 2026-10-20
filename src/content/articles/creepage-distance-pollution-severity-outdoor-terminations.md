---
title: "Creepage Distance and Pollution Severity: Sizing an Outdoor Termination"
seoTitle: "Creepage Distance for Outdoor HV Terminations"
description: "An outdoor termination's insulation can be fine on paper and still flash over when salt or dust builds up. Here's how creepage distance and pollution severity decide the sizing."
pubDate: 2026-10-20
draft: false
category: "Standards"
tags: ["Standards", "Field & Install", "Materials"]
image: "/articles/creepage-distance-pollution-levels.png"
imageAlt: "Bar chart of minimum specific creepage distance for outdoor HV terminations: 16 mm/kV for light, 20 for medium, 25 for heavy and 31 for very heavy pollution."
---

A high-voltage termination has two jobs that are easy to blur together. Inside, it controls the electric field where the cable's shield ends. Outside, it has to keep the surface of the insulator from becoming a path for current. The second job is the one a clean lab never tests the way a coastal substation or a dusty industrial site does, and it's what creepage distance exists to solve.

## What Creepage Distance Actually Measures

Creepage distance is the length of the shortest path along the surface of the insulating body, between the energized end of the termination and the grounded end. It follows every shed and groove rather than the straight line through the air, which is why a ribbed silicone or porcelain housing has far more creepage than its physical height suggests. The reason it matters is that a dry, clean surface is an excellent insulator, while a wet and contaminated one is not. Salt, dust or industrial deposits dissolve in morning fog or light rain and form a thin conductive film, and leakage current starts to run along the surface. Left alone, that current dries out bands of the film, concentrates the voltage across them, and can end in a flashover.

## From Site Conditions to a Design Number

Standards approach this by classifying the environment first and the hardware second. The long-standing IEC pollution framework sorts sites into four levels, from light to very heavy, and pairs each with a recommended minimum specific creepage distance: the creepage length per kilovolt of the highest system voltage. The figures usually quoted for the older edition are about 16, 20, 25 and 31 mm/kV for light, medium, heavy and very heavy pollution, as [summarized in a utility-side review](https://inmr.com/?p=57349). A termination on a 36 kV system in a heavy-pollution coastal site, for example, would be asked for a creepage length in the region of 900 mm, where the same cable in a clean inland substation might need well under 600 mm.

Two cautions apply before any of those numbers go on a drawing. The first is that the current edition of [IEC TS 60815-1](https://www.boutique.afnor.org/en-gb/standard/iec-ts-6081512025/selection-and-dimensioning-of-highvoltage-insulators-intended-for-use-in-po/xs305279/453304), published in 2025, moves away from the four named levels to a measured site pollution severity value, then applies corrections for altitude, insulator diameter and shed profile. The old table is a useful rule of thumb and no longer the whole method. The second is that these standards are written around insulators in general, so the termination manufacturer's own rated creepage, and the specification the utility actually writes into the contract, take priority over any generic figure.

## Where It Gets Decided in Practice

The environment is rarely uniform across a project, and that's where creepage specifications go wrong. A termination in an indoor switchroom sees almost none of this stress, while the outdoor ones in the same project, particularly near the coast, near cement or fertiliser plants, or beneath a bird-roosting structure, can see a great deal. Choosing one termination for the whole job is convenient to procure and often wrong in both directions: too much creepage indoors wastes height and cost, and too little outdoors is the failure that shows up in the first wet season.

More creepage also isn't free. A longer termination is taller and heavier, needs more clearance, and can change the geometry of the gantry or cabinet that has to hold it. And the benefit isn't perfectly linear: very large creepage on a small-diameter body performs worse than the arithmetic suggests, which is part of why the newer edition adds diameter and profile corrections.

## Why the Shrink Technology Matters Less Here

Creepage is a property of the finished housing's geometry and surface material, not of how it was fitted. A [cold-shrink or heat-shrink body](/articles/cold-shrink-vs-heat-shrink-terminations/) built to the same shed profile gives the same creepage. What differs is the surface material's behaviour once contaminated: silicone-based housings tend to shed water and recover hydrophobicity, which is a large part of why they dominate heavily polluted outdoor sites.

## A Practical Order of Operations

The sequence that avoids most of the problems is short. Classify each termination location separately instead of the project as a whole. Take the creepage requirement from the current edition of the standard or the utility's own specification. Confirm the candidate product's rated creepage, not its height. Then check that the extra length fits the physical space before the order is placed. [Reynard](https://reynard.nl/high-voltage-jointing-offshore/) specifies terminations against project-specific site conditions rather than a single catalogue default, which is the more reliable starting point when pollution levels differ across a site.

Sources: [INMR — Selecting Insulators for Polluted Environments: Utility Perspective](https://inmr.com/?p=57349), [IEC TS 60815-1:2025 overview (AFNOR)](https://www.boutique.afnor.org/en-gb/standard/iec-ts-6081512025/selection-and-dimensioning-of-highvoltage-insulators-intended-for-use-in-po/xs305279/453304).
