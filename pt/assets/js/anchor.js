$(function() {
  return $('h3').each(function(i, el) {
    const $el = $(el);
    const id = $el.attr('id');
    if (id) {
      return $el.append($("<a />").addClass("header-link").attr("href", "#" + id).html('<i class="fa fa-link"></i>'));
    }
  });
});
