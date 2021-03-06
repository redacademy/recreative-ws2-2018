<?php
/**
 * Template part for displaying page content in page.php.
 *
 * @package RED_Starter_Theme
 */
?>

<?php $row = CFS()->get('content_for_about');
		foreach ( $row as $content ) {?>
	<div class="post1 about-post">
		<article id="post-<?php echo get_the_ID(); ?>" <?php post_class(); ?>>		
		<div class="upper-content">
			<div>
				<h3><?php echo $content['about_content_title'];?></h3>
				<img src='<?php echo $content['about_content_image'];?>' alt='sustainability image'>
			</div>
			<div class="about-content">
				<p><?php echo $content['about_content_blurb'];?></p>
			</div>
		</div>
		<div class="blog-entry-meta about-entry-meta">
			<p class="aboutLink"><?php echo $content['about_more_link'];?></p>
		</div>
		</article>
	</div>
<?php }?>



