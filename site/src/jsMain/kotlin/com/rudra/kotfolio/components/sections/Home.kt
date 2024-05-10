package com.rudra.kotfolio.components.sections

import androidx.compose.runtime.Composable
import com.rudra.kotfolio.HeadlineTextStyle
import com.rudra.kotfolio.SubheadlineTextStyle
import com.rudra.kotfolio.components.styles.ButtonStyle
import com.rudra.kotfolio.components.styles.HelloImStyle
import com.rudra.kotfolio.components.styles.HeroContainerKeyFrames
import com.rudra.kotfolio.components.styles.HeroSectionStyle
import com.rudra.kotfolio.components.styles.UserNameStyle
import com.rudra.kotfolio.components.styles.UsersMessageStyle
import com.rudra.kotfolio.utils.Constants
import com.rudra.kotfolio.utils.CustomColorSchemes
import com.rudra.kotfolio.utils.Res
import com.varabyte.kobweb.compose.css.FontWeight
import com.varabyte.kobweb.compose.foundation.layout.Box
import com.varabyte.kobweb.compose.foundation.layout.Column
import com.varabyte.kobweb.compose.ui.Alignment
import com.varabyte.kobweb.compose.ui.Modifier
import com.varabyte.kobweb.compose.ui.graphics.Colors
import com.varabyte.kobweb.compose.ui.modifiers.animation
import com.varabyte.kobweb.compose.ui.modifiers.color
import com.varabyte.kobweb.compose.ui.modifiers.fontFamily
import com.varabyte.kobweb.compose.ui.modifiers.fontWeight
import com.varabyte.kobweb.compose.ui.modifiers.margin
import com.varabyte.kobweb.compose.ui.modifiers.width
import com.varabyte.kobweb.compose.ui.toAttrs
import com.varabyte.kobweb.core.rememberPageContext
import com.varabyte.kobweb.silk.components.animation.toAnimation
import com.varabyte.kobweb.silk.components.forms.Button
import com.varabyte.kobweb.silk.components.forms.ButtonSize
import com.varabyte.kobweb.silk.components.style.toAttrs
import com.varabyte.kobweb.silk.components.style.toModifier
import com.varabyte.kobweb.silk.components.text.SpanText
import com.varabyte.kobweb.silk.theme.colors.ColorMode
import org.jetbrains.compose.web.css.AnimationTimingFunction
import org.jetbrains.compose.web.css.percent
import org.jetbrains.compose.web.css.px
import org.jetbrains.compose.web.css.s
import org.jetbrains.compose.web.dom.Div

@Composable
fun Home() {
    Box(
        modifier = HeroSectionStyle.toModifier().animation(HeroContainerKeyFrames.toAnimation(
            duration = 1.s,
            timingFunction = AnimationTimingFunction.EaseInOut
        )),
        contentAlignment = Alignment.CenterStart
    ) {
        Column(
            horizontalAlignment = Alignment.Start
        ) {

            SpanText(
                text = Constants.HELLO_IM,
                modifier = HelloImStyle.toModifier()
                    .color(
                        when (ColorMode.current) {
                            ColorMode.LIGHT -> Colors.Gray
                            ColorMode.DARK -> Colors.DimGray
                        }
                    )
                    .fontWeight(FontWeight.Bold)
            )
            SpanText(
                text = Constants.RUDRA_DAVE,
                modifier = UserNameStyle.toModifier()
                    .color(
                        when (ColorMode.current) {
                            ColorMode.LIGHT -> Colors.Black
                            ColorMode.DARK -> Colors.White
                        }
                    )
                    .fontWeight(FontWeight.Bold)
            )

            Div(
                SubheadlineTextStyle.toModifier().margin(top = 20.px).toAttrs()
            ) {
                SpanText(
                    text = Constants.AND_NICE_TO_MEET_YOU,
                    modifier = UsersMessageStyle.toModifier()
                        .color(
                            when (ColorMode.current) {
                                ColorMode.LIGHT -> Colors.Gray
                                ColorMode.DARK -> Colors.DimGray
                            }
                        )
                        .fontFamily(Res.Fonts.DM_SANS)
                )
            }

            val ctx = rememberPageContext()

            Div(HeadlineTextStyle.toAttrs()) {
                Button(
                    onClick = {
                        ctx.router.navigateTo(Constants.RESUME_URL)
                    },
                    colorScheme = CustomColorSchemes.BlackAndWhite,
                    size = ButtonSize.MD,
                    modifier = ButtonStyle.toModifier().width(150.percent).margin(top = 70.px)
                ) {
                    SpanText(
                        text = Constants.RESUME,
                        modifier = Modifier.fontFamily(Res.Fonts.Tauri)
                    )
                }
            }
        }
    }
}