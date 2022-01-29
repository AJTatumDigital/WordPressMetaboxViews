jQuery(".ajtd-rp-show-details-btn").click(function() {
    var detailsDiv = jQuery(this).next();
    detailsDiv.toggle(850, "swing", function() {
        if (detailsDiv.is(":visible")) {
            jQuery(".ajtd-rp-show-details-btn").children("div").eq(0).text("Hide Excerpt");
        } else {
            jQuery(".ajtd-rp-show-details-btn").children("div").eq(0).text("Show Excerpt");
        }
    });
})