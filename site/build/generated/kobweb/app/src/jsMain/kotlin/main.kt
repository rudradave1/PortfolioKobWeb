import androidx.compose.runtime.CompositionLocalProvider
import com.varabyte.kobweb.core.AppGlobals
import com.varabyte.kobweb.navigation.RoutePrefix
import com.varabyte.kobweb.navigation.Router
import com.varabyte.kobweb.navigation.UpdateHistoryMode
import com.varabyte.kobweb.silk.components.animation.registerKeyframes
import com.varabyte.kobweb.silk.defer.renderWithDeferred
import kotlinx.browser.document
import kotlinx.browser.window
import org.jetbrains.compose.web.renderComposable

public fun main() {
    RoutePrefix.set("")
    val router = Router()
    com.varabyte.kobweb.core.init.initKobweb(router) { ctx ->
        ctx.router.register("/") { com.rudra.kotfolio.pages.HomePage() }
        ctx.router.register("/about") { com.rudra.kotfolio.pages.AboutPage() }

    }
    router.addRouteInterceptor {
        path = path.removeSuffix(".html").removeSuffix(".htm")
    }

    com.varabyte.kobweb.silk.init.additionalSilkInitialization = { ctx ->
        com.varabyte.kobweb.silk.init.initSilkWidgets(ctx)
        com.varabyte.kobweb.silk.init.initSilkWidgetsKobweb(ctx)
        ctx.theme.registerComponentStyle(com.rudra.kotfolio.HeadlineTextStyle)
        ctx.theme.registerComponentStyle(com.rudra.kotfolio.SubheadlineTextStyle)
        ctx.theme.registerComponentStyle(com.rudra.kotfolio.components.layouts.MarkdownStyle)
        ctx.theme.registerComponentStyle(com.rudra.kotfolio.components.layouts.PageContentStyle)
        ctx.theme.registerComponentStyle(com.rudra.kotfolio.components.sections.FooterStyle)
        ctx.theme.registerComponentStyle(com.rudra.kotfolio.components.sections.NavHeaderStyle)
        ctx.theme.registerComponentStyle(com.rudra.kotfolio.components.styles.AboutStyle)
        ctx.theme.registerComponentStyle(com.rudra.kotfolio.components.styles.BackgroundImageStyle)
        ctx.theme.registerComponentStyle(com.rudra.kotfolio.components.styles.ButtonStyle)
        ctx.theme.registerComponentStyle(com.rudra.kotfolio.components.styles.HeroSectionStyle)
        ctx.theme.registerComponentStyle(com.rudra.kotfolio.components.styles.HelloImStyle)
        ctx.theme.registerComponentStyle(com.rudra.kotfolio.components.styles.UserNameStyle)
        ctx.theme.registerComponentStyle(com.rudra.kotfolio.components.styles.UsersMessageStyle)
        ctx.theme.registerComponentStyle(com.rudra.kotfolio.components.styles.ProjectStyle)
        ctx.theme.registerComponentStyle(com.rudra.kotfolio.components.styles.SectionTitleStyle)
        ctx.theme.registerComponentStyle(com.rudra.kotfolio.components.styles.SectionDescriptionStyle)
        ctx.theme.registerComponentStyle(com.rudra.kotfolio.components.styles.WorkExperienceItemRoleAndDurationStyle)
        ctx.theme.registerComponentStyle(com.rudra.kotfolio.components.styles.WorkExperienceItemOrgStyle)
        ctx.theme.registerComponentStyle(com.rudra.kotfolio.components.styles.ExperienceStyle)
        ctx.theme.registerComponentStyle(com.rudra.kotfolio.components.widgets.ArrowUpStyle)
        ctx.theme.registerComponentStyle(com.rudra.kotfolio.components.widgets.BackToTopButtonStyle)
        ctx.theme.registerComponentStyle(com.rudra.kotfolio.components.widgets.FooterIconsStyle)
        ctx.theme.registerComponentVariants(com.rudra.kotfolio.CircleButtonVariant)
        ctx.theme.registerComponentVariants(com.rudra.kotfolio.UncoloredButtonVariant)
        ctx.stylesheet.registerKeyframes(com.rudra.kotfolio.components.sections.SideMenuSlideInAnim)
        ctx.stylesheet.registerKeyframes(com.rudra.kotfolio.components.styles.HeroContainerKeyFrames)
        ctx.stylesheet.registerKeyframes(com.rudra.kotfolio.components.widgets.FadeInKeyFrames)
        com.rudra.kotfolio.initColorMode(ctx)
        com.rudra.kotfolio.initSiteStyles(ctx)
        com.rudra.kotfolio.initTheme(ctx)
    }

    // For SEO, we may bake the contents of a page in at build time. However, we will
    // overwrite them the first time we render this page with their composable, dynamic
    // versions. Think of this as poor man's hydration :)
    // See also: https://en.wikipedia.org/wiki/Hydration_(web_development)
    router.navigateTo(window.location.href.removePrefix(window.location.origin),
            UpdateHistoryMode.REPLACE)

    val root = document.getElementById("root")!!
    while (root.firstChild != null) { root.removeChild(root.firstChild!!) }

    AppGlobals.initialize(mapOf("title" to "Kotfolio"))
    renderComposable(rootElementId = "root") {
        com.rudra.kotfolio.AppEntry {
            router.renderActivePage { renderWithDeferred { it() } }
        }
    }
}
