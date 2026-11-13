---
title: "On-Site Commissioning Tests for HV Cable Terminations: AC Resonance vs VLF vs DAC"
seoTitle: "On-Site HV Cable Tests: AC Resonance vs VLF vs DAC"
description: "Which voltage source proves a new HV termination on site? Compare AC resonance, VLF and DAC, what the standards and CIGRE say, and how to write the test spec."
pubDate: 2026-11-13
draft: false
category: "Testing"
tags: ["commissioning", "ac resonance", "vlf", "dac", "after-laying test", "iec 60840", "iec 62067"]
image: "/articles/on-site-commissioning-test-methods.png"
imageAlt: "Three-column comparison of on-site HV cable test methods: AC resonance at 20 to 300 Hz is the method used for commissioning, VLF at 0.1 Hz has no commissioning recommendation at EHV, and DAC is better suited to diagnostics."
---

A termination can pass every factory test and still fail the first hour on site. Stripping, cleaning, stress-control placement and seating happen in a tent or a substation bay, not in a plant. The commissioning test is the first time the finished system, cable, joints and terminations together, is proven as one.

Yet the specification often says only "voltage test after installation". The voltage source you choose changes what the test proves, so it deserves a clause of its own.

## What the Standards Actually Cover

IEC 60840 (edition 5.0, 2020) covers extruded cables and accessories above 30 kV up to 150 kV. IEC 62067 (edition 3.0, 2022) covers those above 150 kV up to 500 kV. Both include provisions for tests after installation. Our guide to [which standard applies to your terminations](/articles/iec-60840-vs-iec-62067-which-standard-applies-hv-cable-terminations/) explains how to pick between them.

CIGRE Technical Brochure 841, *After Laying Tests on AC and DC Cable Systems with New Technologies*, reviews newer test equipment and how to set levels, durations and frequencies. For XLPE and EPR cables its recommendations generally follow the two IEC standards.

## AC Resonance: The Reference Method

Series resonant sets energise the cable with a sinusoidal voltage close to power frequency, commonly quoted as 20 to 300 Hz, dropping toward 10 Hz for very long circuits. Published guidance describes a withstand of roughly 1.4 to 1.7 times U0 for one hour, passing if no breakdown occurs. For 220 to 400 kV systems, CIGRE TB 841 suggests 60 minutes at 1.7 U0.

Because the field distribution resembles service, this is the method that exercises a termination's stress control the way it will be stressed in operation. The trade-off is equipment: resonant sets are heavier and need a suitable truck or container, power supply and access.

## VLF: Light, but Limited at HV

Very low frequency sets run at 0.1 Hz and are far easier to transport. That convenience is why they are common on medium-voltage cables. For HV and EHV commissioning the position is cautious. One industry review states that the standards do not recommend VLF for commissioning, and CIGRE TB 841 gives no EHV commissioning recommendation, citing stress limits at interfaces. It also lists the allowable interface stresses under VLF as a knowledge gap.

Terminations and joints are exactly those interfaces. If a project proposes VLF on an HV circuit, ask which standard clause supports it and who accepts the risk.

## DAC: A Diagnostic Tool First

Damped AC sets charge the cable and let it ring down through an inductor. CIGRE TB 841 notes a charge time of 5 seconds or less and alternating-polarity shots, and gives separate diagnostic guidance for new XLPE and EPR cables, but no EHV recommendation. Many practitioners see DAC as better suited to PD measurement than to a pass-or-fail withstand.

DC testing is not an option for XLPE systems because of space-charge accumulation.

## Where Partial Discharge Fits

PD measurement during the AC test is advisable but does not replace the withstand. Sensors are typically placed on the grounding leads of the terminations at both ends. According to the same review, signals become hard to detect beyond roughly 2 to 3 km, so longer circuits need distributed sensors at cross-bonding joints. Our article on [partial discharge testing of terminations](/articles/partial-discharge-testing-terminations/) covers sensitivity and acceptance limits in detail. CIGRE points to TB 728 for single-ended, double-ended and distributed PD measurement.

## Why It Is Worth Doing Properly

KEMA Labs reported a review of about 839 on-site tests between 2010 and 2024 (one year missing) with 75 breakdowns, an average of roughly 11%, with large year-to-year variation. Joints were identified as the most vulnerable component; the dataset is from one laboratory and does not break out terminations separately, so read it as a sign that site tests do find real defects, not as a termination failure rate.

## Practical Takeaway: A Test Clause That Works

1. Name the voltage source (AC resonance for HV and EHV unless the project can justify otherwise).
2. State the voltage as a multiple of U0, the duration and the frequency range, with the standard cited by number and edition.
3. Require PD measurement during the test, with the achieved sensitivity and sensor positions reported.
4. Define pass and fail, the witness and the remedial route before the test day.
5. Confirm the test set can reach the site and carry the circuit's capacitance, ahead of vessel or crane bookings.

Reynard lists AC resonance, VLF, DAC, partial discharge, TDR, insulation resistance and tan delta testing among its [high voltage testing services](https://reynard.nl/high-voltage-testing/), with a truck-mounted onshore unit for cable systems up to 400 kV. Whoever you choose, ask for the same capability evidence you would demand of the termination itself.

Sources: [INMR: Knowledge & Experience in On-Site Commissioning Testing of High-Voltage Cable Systems](https://www.inmr.com/knowledge-experience-in-on-site-commissioning-testing-of-high-voltage-cable-systems/), [CIGRE ELECTRA 318: TB 841 After Laying Tests on AC and DC Cable Systems with New Technologies](https://electra.cigre.org/318-october-2021/technical-brochures/after-laying-tests-on-ac-and-dc-cable-systems-with-new-technologies.html).
