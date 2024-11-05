function shareOnFacebook() {
  const url = "https://www.fieldcode.com";
  const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
  window.open(facebookShareUrl, "facebook-share-dialog", "width=800,height=600");
  return false;
}

$(document).ready(function () {
    $('.jsMobileMenuTrigger').on('click', function () {
        $('.menu-bar').addClass('active');
    });
    $('.jsMobileMenuClose').on('click', function () {
      $('.menu-bar').removeClass('active');
  });
});
