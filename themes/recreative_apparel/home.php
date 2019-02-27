<?php
/**
 * The template for displaying all single posts.
 *
 * @package RED_Starter_Theme
 */

get_header(); ?>
<!-- 
  <div class="blog-hero-image">
      <?php the_post_thumbnail( 'large' ); ?>
  </div> -->

	<div id="primary" class="content-area">
		<main id="main" class="site-main" role="main">


      <div class="blog-wrapper">

        <div class="blog-carousel">

          <?php while ( have_posts() ) : the_post(); ?>

            <?php get_template_part( 'template-parts/content', 'home-blog' ); ?>

          <?php endwhile; // End of the loop. ?>

        </div>

      </div>

    

		</main><!-- #main -->
	</div><!-- #primary  -->

<?php
get_footer();
?>