url = "https://api.jikan.moe/v4/anime"

$.ajax({
    datatype: "json",
    type: "GET",
    url: url,
    success: function (json) {

        let content = "";
        json.data.forEach(function (element) {
            content += "<div class='card'>" +
                "<img src='" + element.images['jpg'].image_url + "' alt='thumbnail'/>" +
                "<div class='card_desc'>" +
                "<h3>" + element.title + "</h3>";
            if (element.episodes != null) {
                content +=
                    "<p>" + element.episodes + " épisode(s)</p>";
            } else {
                content += "<p></p>";
            }

            content += "<a href='" + element.url + "'>Voir plus</a></div></div>";
        });

        if (content == "") {
            content += '<div class="no-result">' +
                '<p>Aucun résultat trouvé pour "' + filters.letter + '".</p>' +
                '</div>';
        }

        $('.result').html(content);

    }
})