(function () {
    'use strict';

    var params = new URLSearchParams(window.location.search);
    var query = (params.get('q') || '').trim();

    document.querySelectorAll('form.site-search input[name="q"]').forEach(function (input) {
        if (query) input.value = query;
    });

    var status = document.getElementById('search-status');
    var list = document.getElementById('search-results');
    if (!status || !list) return;

    if (!query) {
        status.textContent = 'Type a few words to search the site.';
        return;
    }

    var keys = query.toLowerCase().match(/[a-z0-9]+/g) || [];
    if (!keys.length) {
        status.textContent = 'Type a few words to search the site.';
        return;
    }

    status.textContent = 'Searching…';

    fetch('/assets/search-index.json')
        .then(function (response) {
            if (!response.ok) throw new Error('index');
            return response.json();
        })
        .then(function (pages) {
            var hits = pages
                .map(function (page) { return { page: page, score: scorePage(page, keys) }; })
                .filter(function (hit) { return hit.score > 0; })
                .sort(function (a, b) {
                    return b.score - a.score || a.page.title.localeCompare(b.page.title);
                });

            list.innerHTML = '';
            if (!hits.length) {
                status.textContent = 'No pages match “' + query + '”.';
                return;
            }

            status.textContent = hits.length + (hits.length === 1 ? ' page' : ' pages') + ' for “' + query + '”.';
            hits.forEach(function (hit) {
                var item = document.createElement('li');
                var link = document.createElement('a');
                link.href = hit.page.url;
                link.textContent = hit.page.title;
                var blurb = document.createElement('p');
                blurb.innerHTML = highlight(snippet(hit.page, keys), keys);
                item.appendChild(link);
                item.appendChild(blurb);
                list.appendChild(item);
            });
        })
        .catch(function () {
            status.textContent = 'Search is unavailable right now.';
        });

    function scorePage(page, keywords) {
        var title = (page.title || '').toLowerCase();
        var description = (page.description || '').toLowerCase();
        var text = (page.text || '').toLowerCase();
        var score = 0;
        for (var i = 0; i < keywords.length; i++) {
            var word = keywords[i];
            var hit = 0;
            if (title.indexOf(word) !== -1) hit += 8;
            if (description.indexOf(word) !== -1) hit += 4;
            if (text.indexOf(word) !== -1) hit += 1;
            if (!hit) return 0;
            score += hit;
        }
        return score;
    }

    function snippet(page, keywords) {
        var source = page.description || page.text || '';
        var lower = source.toLowerCase();
        var at = -1;
        for (var i = 0; i < keywords.length; i++) {
            at = lower.indexOf(keywords[i]);
            if (at !== -1) break;
        }
        if (at === -1) return source.slice(0, 180);
        var start = Math.max(0, at - 60);
        var end = Math.min(source.length, at + 120);
        var cut = source.slice(start, end).trim();
        if (start > 0) cut = '…' + cut;
        if (end < source.length) cut += '…';
        return cut;
    }

    function highlight(text, keywords) {
        var safe = text
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;');
        keywords.forEach(function (word) {
            var pattern = new RegExp('(' + word.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + ')', 'ig');
            safe = safe.replace(pattern, '<mark>$1</mark>');
        });
        return safe;
    }
})();
