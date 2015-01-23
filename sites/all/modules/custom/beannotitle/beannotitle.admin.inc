<?php
/**
 * @file
 *   Defines the form used to configure the `beannotitle_bean_types` variable.
 */
function beannotitle_admin() {
  $bean_types = array();
  foreach (bean_get_types() as $bean_type) {
    $bean_types[$bean_type->type] = $bean_type->type;
  }

  $form['description']['#markup'] = '<p><strong><em>Bean - No Title</em></strong> allows
    you to hide the Title field on selected Block types and automatically set
    the value to "&lt;none&gt;". This is useful for Block types that are always
    displayed without a title.</p>';

  $form['beannotitle_bean_types'] = array(
    '#type' => 'checkboxes',
    '#options' => $bean_types,
    '#title' => t('Block Types'),
    '#description' => t('Select the Block types that should have their title fields hidden.'),
    '#default_value' => variable_get('beannotitle_bean_types'),
  );

  return system_settings_form($form);
}
