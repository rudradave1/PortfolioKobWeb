package com.rudra.kotfolio.pages

import androidx.compose.runtime.Composable
import com.varabyte.kobweb.compose.ui.Modifier
import com.varabyte.kobweb.compose.ui.modifiers.*
import com.varabyte.kobweb.core.Page
import com.rudra.kotfolio.components.layouts.PageLayout
import com.rudra.kotfolio.components.sections.About
import com.rudra.kotfolio.components.sections.Experience
import com.rudra.kotfolio.components.sections.Home
import com.rudra.kotfolio.components.sections.Projects
import com.rudra.kotfolio.components.sections.SkillsAndTools
import com.rudra.kotfolio.utils.Res
import com.varabyte.kobweb.compose.foundation.layout.*

@Page
@Composable
fun HomePage() {
    PageLayout("Home") {
        Row(
            Modifier.fillMaxWidth().fontFamily(Res.Fonts.Space_Grotesk).id("home")
        ) {
            Box {

                Column {

                    Home()

                    About()

                    Experience()

                    SkillsAndTools()

                    Projects()
                }
            }
        }
    }
}