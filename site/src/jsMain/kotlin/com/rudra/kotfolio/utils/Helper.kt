package com.rudra.kotfolio.utils

import com.rudra.kotfolio.components.model.WorkExperience

fun getAllProjects() =
    listOf(
        Pair(Res.Images.PROJECT_TRIVIA, Constants.PROJECT_TRIVIA_URL),
        Pair(Res.Images.PROJECT_DEFINEEASY, Constants.PROJECT_DEFINE_EASY_URL),
        Pair(Res.Images.PROJECT_FHOTOS, Constants.PROJECT_FHOTOS_URL),
        Pair(Res.Images.PROJECT_WEATHER, Constants.PROJECT_WEATHER_URL)
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
