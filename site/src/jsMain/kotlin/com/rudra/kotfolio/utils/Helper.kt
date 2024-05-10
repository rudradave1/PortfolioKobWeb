package com.rudra.kotfolio.utils

import com.rudra.kotfolio.components.model.WorkExperience

fun getAllProjects() =
    listOf(
        Pair(Res.Images.PROJECT_READBUD, Constants.PROJECT_READBUD_URL),
        Pair(Res.Images.PROJECT_JUSTAP, Constants.PROJECT_JUSTAP_URL),
        Pair(Res.Images.PROJECT_PASSGENIE, Constants.PROJECT_PASSGENIE_URL),
        Pair(Res.Images.PROJECT_MEDIFY, Constants.PROJECT_MEDIFY_URL),
        Pair(Res.Images.PROJECT_PRESIN, Constants.PROJECT_PRESIN_URL)
    )

fun getAllWorkExperience() = listOf(
    WorkExperience(
        sequenceNumber = "01",
        role = "Software Developer - Android",
        organization = "Encender Technologies",
        duration = "Mar 2020 - Aug 2021"
    ),
    WorkExperience(
        sequenceNumber = "02",
        role = "Software Engineer",
        organization = "Capgemini",
        duration = "Sep 2021 - Apr 2022"
    ),
    WorkExperience(
        sequenceNumber = "03",
        role = "Android Developer",
        organization = "Yore",
        duration = "Apr 2022 - Present"
    )
)
