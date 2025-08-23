<select name="filter_type" id="filter_type">
  <option value="">Вид</option>
  <?php
    $types = get_terms(['taxonomy' => 'type', 'hide_empty' => false]);
    foreach ($types as $type) {
      echo '<option value="' . esc_attr($type->slug) . '">' . esc_html($type->name) . '</option>';
    }
  ?>
</select>