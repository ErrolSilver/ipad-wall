<?php
/**
 * @file
 * Default theme implementation to display a single Drupal page.
 *
 * The doctype, html, head and body tags are not in this template. Instead they
 * can be found in the html.tpl.php template in this directory.
 *
 * Available variables:
 *
 * General utility variables:
 * - $base_path: The base URL path of the Drupal installation. At the very
 *   least, this will always default to /.
 * - $directory: The directory the template is located in, e.g. modules/system
 *   or themes/bartik.
 * - $is_front: TRUE if the current page is the front page.
 * - $logged_in: TRUE if the user is registered and signed in.
 * - $is_admin: TRUE if the user has permission to access administration pages.
 *
 * Site identity:
 * - $front_page: The URL of the front page. Use this instead of $base_path,
 *   when linking to the front page. This includes the language domain or
 *   prefix.
 * - $logo: The path to the logo image, as defined in theme configuration.
 * - $svg_logo: The image tag for the logo contained in /images/logo.svg.
 *   Modify the width and height settings in template.php accordingly.
 * - $site_name: The name of the site, empty when display has been disabled
 *   in theme settings.
 * - $site_slogan: The slogan of the site, empty when display has been disabled
 *   in theme settings.
 *
 * Navigation:
 * - $main_menu (array): An array containing the Main menu links for the
 *   site, if they have been configured.
 * - $secondary_menu (array): An array containing the Secondary menu links for
 *   the site, if they have been configured.
 * - $breadcrumb: The breadcrumb trail for the current page.
 *
 * Page content (in order of occurrence in the default page.tpl.php):
 * - $title_prefix (array): An array containing additional output populated by
 *   modules, intended to be displayed in front of the main title tag that
 *   appears in the template.
 * - $title: The page title, for use in the actual HTML content.
 * - $title_suffix (array): An array containing additional output populated by
 *   modules, intended to be displayed after the main title tag that appears in
 *   the template.
 * - $messages: HTML for status and error messages. Should be displayed
 *   prominently.
 * - $tabs (array): Tabs linking to any sub-pages beneath the current page
 *   (e.g., the view and edit tabs when displaying a node).
 * - $action_links (array): Actions local to the page, such as 'Add menu' on the
 *   menu administration interface.
 * - $feed_icons: A string of all feed icons for the current page.
 * - $node: The node object, if there is an automatically-loaded node
 *   associated with the page, and the node ID is the second argument
 *   in the page's path (e.g. node/12345 and node/12345/revisions, but not
 *   comment/reply/12345).
 *
 * Regions:
 * - $page['help']: Dynamic help text, mostly for admin pages.
 * - $page['highlighted']: Items for the highlighted content region.
 * - $page['content']: The main content of the current page.
 * - $page['sidebar_first']: Items for the first sidebar.
 * - $page['sidebar_second']: Items for the second sidebar.
 * - $page['header']: Items for the header region.
 * - $page['footer']: Items for the footer region.
 *
 * @see bootstrap_preprocess_page()
 * @see template_preprocess()
 * @see template_preprocess_page()
 * @see bootstrap_process_page()
 * @see template_process()
 * @see html.tpl.php
 *
 * @ingroup themeable
 */
?>
<main class="master-wrapper">
  <?php print render($page['multi_screen']); ?>
  
  <section class="screen-view">
    <div class="view--content-container">
      <div class="view--content__front">
        <img src="http://lorempixel.com/768/1024/city/">
      </div>
      <div class="view--content__back">
        <h1>Getting server updates</h1>

      </div>
    </div>
  </section>
  

  <section id="fullScreen" class="full-screen">
  <?php print render($page['full_screen']); ?>

    <!-- Modal -->
    <div class="modal" id="config" tabindex="-1" role="dialog" aria-labelledby="configLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
            <h4 class="modal-title" id="configLabel">Which device is this?</h4>
          </div>
          <div class="modal-body">
            <div class="ipad-select">
              <div class="ipad-select--device">
                <a href="#view1" class="ipad-select--device-chosen">1</a>
              </div>
              <div class="ipad-select--device">
                <a href="#view2" class="ipad-select--device-chosen">2</a>
              </div>
              <div class="ipad-select--device">
                <a href="#view3" class="ipad-select--device-chosen">3</a>
              </div>
              <div class="ipad-select--device">
                <a href="#view4" class="ipad-select--device-chosen">4</a>
              </div>
              <div class="ipad-select--device">
                <a href="#view5" class="ipad-select--device-chosen">5</a>
              </div>
              <div class="ipad-select--device">
                <a href="#view6" class="ipad-select--device-chosen">6</a>
              </div>
              <div class="ipad-select--device">
                <a href="#view7" class="ipad-select--device-chosen">7</a>
              </div>
              <div class="ipad-select--device">
                <a href="#view8" class="ipad-select--device-chosen">8</a>
              </div>
              <div class="ipad-select--device">
                <a href="#view9" class="ipad-select--device-chosen">9</a>
              </div>
              <div class="ipad-select--device">
                <a href="#view10" class="ipad-select--device-chosen">10</a>
              </div>
              <div class="ipad-select--device">
                <a href="#view11" class="ipad-select--device-chosen">11</a>
              </div>
              <div class="ipad-select--device">
                <a href="#view12" class="ipad-select--device-chosen">12</a>
              </div>
              <div class="ipad-select--device">
                <a href="#view13" class="ipad-select--device-chosen">13</a>
              </div>
              <div class="ipad-select--device">
                <a href="#view14" class="ipad-select--device-chosen">14</a>
              </div>
              <div class="ipad-select--device">
                <a href="#view15" class="ipad-select--device-chosen">15</a>
              </div>
              <div class="ipad-select--device">
                <a href="#view16" class="ipad-select--device-chosen">16</a>
              </div>
              <div class="ipad-select--device">
                <a href="#view17" class="ipad-select--device-chosen">17</a>
              </div>
              <div class="ipad-select--device">
                <a href="#view18" class="ipad-select--device-chosen">18</a>
              </div>
              <div class="ipad-select--device">
                <a href="#view19" class="ipad-select--device-chosen">19</a>
              </div>
              <div class="ipad-select--device">
                <a href="#view20" class="ipad-select--device-chosen">20</a>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <div class="checkbox">
              <label>
                <input type="checkbox" id="fullscreenCheck" value="fullscreen"> Fullscreen?
              </label>
            </div>
          </div> <!-- /modal-footer -->
        </div> <!-- /modal-content -->
      </div> <!-- /modal-dialog -->
    </div> <!-- /modal -->
  </section>
</main>
