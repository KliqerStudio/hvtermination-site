---
title: "Dry-Type vs Fluid-Filled HV Cable Terminations: How to Choose"
seoTitle: "Dry-Type vs Fluid-Filled HV Cable Terminations"
description: "Dry-type or fluid-filled? How the two termination designs differ, what CIGRE service data and IEC 60840 / 62271-209 say, and a checklist for choosing."
pubDate: 2026-11-27
draft: false
category: "Materials"
tags: ["Materials", "Standards", "Field & Install"]
image: "/articles/dry-vs-fluid-filled-terminations.png"
imageAlt: "Chart of CIGRE TB 815 land-cable fault shares by component: cable 56%, terminations 18%, joints 16%, other 9%."
---

Ask a utility engineer what is inside a high-voltage outdoor termination and the answer used to be simple: insulating oil, a stress cone, and a porcelain housing. Today the same question has a second answer — no fluid at all. The choice between fluid-filled and dry-type designs now sits in most 72.5–170 kV termination specifications, and it is argued with more marketing than data.

## How the Two Designs Differ

A **fluid-filled termination** places the prepared cable end and its stress-control element inside an insulator housing, then fills the remaining space with an insulating liquid or gas. The fluid does the dielectric work around the stress cone and has to stay sealed for the life of the asset.

A **dry-type termination** replaces the fluid with solid or gel-like elastomer. In one documented 145 kV design, soft cured rubber takes the place of the fluid and the insulation system is a prefabricated one-piece unit, so nothing is poured on site (NKT, Jicable 2019). Manufacturers of dry designs describe an oil- and gas-free assembly that is fitted to the cable on the ground and then lifted into position.

Neither is a cable-side technology in itself. The stress control principle is the same one described in [nonlinear field grading materials and stress cones](/articles/nonlinear-field-grading-materials-stress-cones/); what changes is what surrounds it.

## What Dry-Type Designs Claim to Improve

The advantages cited in the technical literature cluster around handling and risk rather than electrical performance:

- **No fluid to leak.** Oil leakage is an environmental concern, and fluid- or gas-filled designs carry a fire load that a dry design avoids.
- **Pre-tested components.** The insulating unit is assembled and tested under factory conditions rather than filled in the field.
- **Easier installation.** Industry material describes dry-type units as lighter and mountable in different orientations, where oil-filled units typically need heavy lifting equipment.
- **Wider temperature behaviour.** Fluids have a pour point and a boiling point; a solid body does not.

Treat these as manufacturers' claims. The NEMA article that quotes a 20–30% weight saving is itself vendor-flavoured, and no independent installation-time figure was found in the sources reviewed for this article.

## What the Service Data Says — and Does Not Say

The most useful independent evidence is CIGRE Technical Brochure 815, which updates service experience for underground and submarine cable systems of 60 kV and above. Its summary reports 744 land-cable faults, of which terminations account for 18%, ahead of joints at 16% and behind cable at 56%.

The summary also describes how termination types compare, and the results do not support a simple "dry is better" conclusion:

- For GIS and transformer terminations, fluid-filled types are reported to fail about twice as often as dry-type.
- For outdoor (air-insulated) terminations, fluid-filled designs with composite insulators are reported to fail more than twelve times as often as fluid-filled with porcelain.
- Dry-type outdoor terminations with composite insulators below 110 kV are reported to fail more than sixty times as often as conventional fluid-filled porcelain designs.

That last result describes a particular combination — dry-type with composite insulators at lower voltages — and should not be generalised to every dry design. The numbers are also taken from the published summary, not the full brochure; read the underlying tables before quoting them in a tender. The practical lesson is the same one found when comparing [silicone and porcelain outdoor terminations](/articles/silicone-vs-porcelain-outdoor-hv-cable-terminations/): the housing material and the fill concept interact, and a type with a long service record is not automatically inferior to a newer one.

## What the Standards Cover

IEC 60840:2020 applies to cable systems and accessories above 30 kV (Um 36 kV) up to and including 150 kV (Um 170 kV). The revision added requirements for gas-immersed terminations above 52 kV and for composite outdoor termination insulators; submarine cables and accessories are excluded. For GIS connections, IEC 62271-209 covers fluid-filled or dry-type terminations above 52 kV, with a separating insulating barrier between cable insulation and switchgear gas — the interface discussed in [plug-in GIS terminations](/articles/gis-cable-terminations-iec-62271-209-plug-in/).

Both standards define type tests, not a ranking. A dry-type and a fluid-filled termination can both be compliant; the standard will not tell you which is the better fit for your site.

## Selection Checklist

1. **Location.** GIS or transformer connection, or open-air? For GIS and transformer terminations, dry designs are widely used up to very high voltages; for outdoor use, check maturity at your voltage.
2. **Voltage class.** Fluid-filled terminations remain far more common at the highest voltages, with cost cited as the main reason.
3. **Fire and environmental constraints.** Substations near buildings, water or protected land favour designs with no fluid inventory.
4. **Installation conditions.** Weather exposure, crane access and available working time favour factory-assembled parts.
5. **Evidence.** Ask for the type-test report against the relevant standard, the service record for that exact design and insulator material, and the [partial discharge](/articles/partial-discharge-testing-terminations/) sensitivity used in factory and site tests.
6. **Workmanship.** Whatever the design, an experienced jointer and a controlled environment matter more than the fill concept.

## Where the Work Gets Done

Either type is only as reliable as the hands that fit it. Specialist jointing and testing contractors such as [Reynard](https://reynard.nl/services/offshore-termination-testing/) work across terminations, joints and high-voltage testing for array, export and HVDC projects, which is the combination a termination decision ultimately depends on: the right design, installed correctly, and tested before energisation.

Sources: [CIGRE — Update of service experience of HV underground and submarine cable systems (TB 815)](https://electra.cigre.org/312-october-2020/technical-brochures/update-of-service-experience-of-hv-underground-and-submarine-cable-systems), [Jicable 2019 C10-2 — dry 145 kV termination (NKT)](https://jicable.org:443/TOUT_JICABLE_FIRST_PAGE/2019/2019-C10-2_page1.pdf), [IEC 60840:2020](https://webstore.iec.ch/publication/63025), [IEC 62271-209](https://webstore.iec.ch/publication/75190).
