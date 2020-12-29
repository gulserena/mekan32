var express = require('express');
var router = express.Router();

/* GET home page. */
const anaSayfa = function(req, res, next) {
    res.render('mekanlar-liste', {
        'baslik': 'Mekan32 | Anasayfa',
        'footer': 'Gülseren Akkuş - Copyrigt 2020',
        'sayfaBaslik': {
            'siteAd': 'Mekan 32',
            'aciklama': 'Isparta Civarındaki Mekanları Keşfedin!'
        },
        'mekanlar': [{
                'ad': 'Old Bear',
                'adres': 'Yedişehitler Mahallesi',
                'puan': 3,
                'imkanlar': ['Kahve', 'Çay', 'Pasta'],
                'mesafe': '1km'
            },
            {
                'ad': 'Edwards',
                'adres': 'Yedişehitler Mahallesi',
                'puan': 5,
                'imkanlar': ['Pasta', 'Limonata', 'Çay', 'Kestane'],
                'mesafe': '7km'
            },
            {
                'ad': 'Lucca',
                'adres': 'Bahçelievler Mahallesi',
                'puan': 5,
                'imkanlar': ['Beypazarı Soda', 'Kuşburnu Çayı', 'Ayran'],
                'mesafe': '40km'
            },
            {
                'ad': 'Mack Bear',
                'adres': 'Yedişehitler Mahalllesi',
                'puan': 2,
                'imkanlar': ['Meyveli  Pasta', 'Hamburger', 'Pizza'],
                'mesafe': '10km'
            },
            {
                'ad': 'Hadre',
                'adres': 'Modernevler Mahallesi',
                'puan': 3,
                'imkanlar': ['Vişne Suyu', 'Dondurma', 'Patates Kızartması'],
                'mesafe': '15km'
            },
            {
                'ad': 'Casia',
                'adres': 'Modernevler Mahallesi',
                'puan': 2,
                'imkanlar': ['Küçük Pasta', 'Beypazarı Maden Suyu', 'Beypazarı Limonlu Maden Suyu'],
                'mesafe': '1km'
            }
        ]
    });
}

const mekanBilgisi = function(req, res, next) {
    res.render('mekan-detay', {
        'baslik': 'Mekan Bilgisi',
        'footer': 'Gülseren Akkuş - Copyrigt 2020',
        'sayfaBaslik': 'Starbucks',
        'mekanBilgisi': {
            'ad': 'Starbucks',
            'adres': 'Centrium Garden',
            'puan': 3,
            'imkanlar': ['Sütlü Kahve', 'Cold brew', 'Filtre Coffee'],
            'koordinatlar': {
                'enlem': '37.781885',
                'boylam': '30.566034'
            },
            'saatler': [{
                'gunler': 'Pazartesi-Cuma',
                'acilis': '07:00',
                'kapanis': '23:00',
                'kapali': false
            }, {
                'gunler': 'Cumartesi',
                'acilis': '09:00',
                'kapanis': '22:00',
                'kapali': false
            }, {
                'gunler': 'Pazar',
                'kapali': true
            }],
            'yorumlar': [{
                    'yorumYapan': 'Gülseren Akkuş',
                    'puan': 3,
                    'tarih': '27.11.2020',
                    'yorumMetni': 'Herşeyden Öte Maden Suları Nefis.'
                },

            ]
        }
    });
}

const yorumEkle = function(req, res, next) {
    res.render('yorum-ekle', {
        title: 'Yorum Ekle',
        'footer': 'Gülseren Akkuş - Copyrigt 2020',
    });
}


module.exports = {
    anaSayfa,
    mekanBilgisi,
    yorumEkle
}
