<?php
/**
 * The main template file.
 *
 * @package RED_Starter_Theme
 */

get_header(); ?>

				<div id="primary" class="content-area">
					<main id="main" class="site-main" role="main">
					<?php if ( have_posts() ) : ?>
						<header>
							<h1 class="page-title screen-reader-text"><?php single_post_title(); ?></h1>
						</header>
							<?php while ( have_posts() ) : the_post(); ?>
								<?php get_template_part( 'template-parts/content-frontpage' ); ?>
							<?php endwhile; ?>
								<?php the_posts_navigation(); ?>
							<?php else : ?>
						<?php get_template_part( 'template-parts/content', 'none' ); ?>
					<?php endif; ?>

					</main><!-- #main -->
				</div><!-- #primary -->
				
			<!-- footer -->
			</div><!-- #content -->
		</div><!-- #page -->
	</body>
</html>
