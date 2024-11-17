ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:4326").setExtent([109.253639, -7.442762, 109.271947, -7.429476]);
var wms_layers = [];

var format_gadm41_IDN_4_0 = new ol.format.GeoJSON();
var features_gadm41_IDN_4_0 = format_gadm41_IDN_4_0.readFeatures(json_gadm41_IDN_4_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_gadm41_IDN_4_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_gadm41_IDN_4_0.addFeatures(features_gadm41_IDN_4_0);
var lyr_gadm41_IDN_4_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_gadm41_IDN_4_0, 
                style: style_gadm41_IDN_4_0,
                popuplayertitle: "gadm41_IDN_4",
                interactive: true,
                title: '<img src="styles/legend/gadm41_IDN_4_0.png" /> gadm41_IDN_4'
            });
var format_komplekmargono_1 = new ol.format.GeoJSON();
var features_komplekmargono_1 = format_komplekmargono_1.readFeatures(json_komplekmargono_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_komplekmargono_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_komplekmargono_1.addFeatures(features_komplekmargono_1);
var lyr_komplekmargono_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_komplekmargono_1, 
                style: style_komplekmargono_1,
                popuplayertitle: "komplek margono",
                interactive: true,
                title: '<img src="styles/legend/komplekmargono_1.png" /> komplek margono'
            });
var format_RW_2 = new ol.format.GeoJSON();
var features_RW_2 = format_RW_2.readFeatures(json_RW_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_RW_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RW_2.addFeatures(features_RW_2);
var lyr_RW_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RW_2, 
                style: style_RW_2,
                popuplayertitle: "RW",
                interactive: true,
    title: 'RW<br />\
    <img src="styles/legend/RW_2_0.png" /> RW01<br />\
    <img src="styles/legend/RW_2_1.png" /> RW02<br />\
    <img src="styles/legend/RW_2_2.png" /> RW03<br />\
    <img src="styles/legend/RW_2_3.png" /> RW04<br />\
    <img src="styles/legend/RW_2_4.png" /> RW05<br />\
    <img src="styles/legend/RW_2_5.png" /> RW06<br />\
    <img src="styles/legend/RW_2_6.png" /> RW07<br />'
        });
var format_RT_3 = new ol.format.GeoJSON();
var features_RT_3 = format_RT_3.readFeatures(json_RT_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_RT_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RT_3.addFeatures(features_RT_3);
var lyr_RT_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RT_3, 
                style: style_RT_3,
                popuplayertitle: "RT",
                interactive: true,
    title: 'RT<br />\
    <img src="styles/legend/RT_3_0.png" /> 02<br />\
    <img src="styles/legend/RT_3_1.png" /> RT01<br />\
    <img src="styles/legend/RT_3_2.png" /> RT02<br />\
    <img src="styles/legend/RT_3_3.png" /> RT03<br />\
    <img src="styles/legend/RT_3_4.png" /> RT04<br />\
    <img src="styles/legend/RT_3_5.png" /> RT05<br />\
    <img src="styles/legend/RT_3_6.png" /> RT06<br />\
    <img src="styles/legend/RT_3_7.png" /> RT07<br />\
    <img src="styles/legend/RT_3_8.png" /> RT08<br />\
    <img src="styles/legend/RT_3_9.png" /> RT09<br />\
    <img src="styles/legend/RT_3_10.png" /> RT10<br />'
        });
var format_Clipped_4 = new ol.format.GeoJSON();
var features_Clipped_4 = format_Clipped_4.readFeatures(json_Clipped_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Clipped_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Clipped_4.addFeatures(features_Clipped_4);
var lyr_Clipped_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Clipped_4, 
                style: style_Clipped_4,
                popuplayertitle: "Clipped",
                interactive: true,
    title: 'Clipped<br />\
    <img src="styles/legend/Clipped_4_0.png" /> hospital<br />\
    <img src="styles/legend/Clipped_4_1.png" /> hotel<br />\
    <img src="styles/legend/Clipped_4_2.png" /> mosque<br />\
    <img src="styles/legend/Clipped_4_3.png" /> school<br />\
    <img src="styles/legend/Clipped_4_4.png" /> yes<br />'
        });
var format_Berkoh_line_5 = new ol.format.GeoJSON();
var features_Berkoh_line_5 = format_Berkoh_line_5.readFeatures(json_Berkoh_line_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Berkoh_line_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Berkoh_line_5.addFeatures(features_Berkoh_line_5);
var lyr_Berkoh_line_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Berkoh_line_5, 
                style: style_Berkoh_line_5,
                popuplayertitle: "Berkoh_line",
                interactive: true,
                title: '<img src="styles/legend/Berkoh_line_5.png" /> Berkoh_line'
            });
var format_KALI_6 = new ol.format.GeoJSON();
var features_KALI_6 = format_KALI_6.readFeatures(json_KALI_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_KALI_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KALI_6.addFeatures(features_KALI_6);
var lyr_KALI_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KALI_6, 
                style: style_KALI_6,
                popuplayertitle: "KALI",
                interactive: true,
                title: '<img src="styles/legend/KALI_6.png" /> KALI'
            });
var format_LapanganTridaya_7 = new ol.format.GeoJSON();
var features_LapanganTridaya_7 = format_LapanganTridaya_7.readFeatures(json_LapanganTridaya_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_LapanganTridaya_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LapanganTridaya_7.addFeatures(features_LapanganTridaya_7);
var lyr_LapanganTridaya_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LapanganTridaya_7, 
                style: style_LapanganTridaya_7,
                popuplayertitle: "Lapangan Tridaya",
                interactive: true,
                title: '<img src="styles/legend/LapanganTridaya_7.png" /> Lapangan Tridaya'
            });
var format_Makam_8 = new ol.format.GeoJSON();
var features_Makam_8 = format_Makam_8.readFeatures(json_Makam_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Makam_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Makam_8.addFeatures(features_Makam_8);
var lyr_Makam_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Makam_8, 
                style: style_Makam_8,
                popuplayertitle: "Makam",
                interactive: true,
                title: '<img src="styles/legend/Makam_8.png" /> Makam'
            });
var format_TamanSatria_9 = new ol.format.GeoJSON();
var features_TamanSatria_9 = format_TamanSatria_9.readFeatures(json_TamanSatria_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_TamanSatria_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TamanSatria_9.addFeatures(features_TamanSatria_9);
var lyr_TamanSatria_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TamanSatria_9, 
                style: style_TamanSatria_9,
                popuplayertitle: "Taman Satria",
                interactive: true,
                title: '<img src="styles/legend/TamanSatria_9.png" /> Taman Satria'
            });
var format_KolamRenang_10 = new ol.format.GeoJSON();
var features_KolamRenang_10 = format_KolamRenang_10.readFeatures(json_KolamRenang_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_KolamRenang_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KolamRenang_10.addFeatures(features_KolamRenang_10);
var lyr_KolamRenang_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KolamRenang_10, 
                style: style_KolamRenang_10,
                popuplayertitle: "Kolam Renang",
                interactive: true,
                title: '<img src="styles/legend/KolamRenang_10.png" /> Kolam Renang'
            });
var format_BPJSPurwokerto_11 = new ol.format.GeoJSON();
var features_BPJSPurwokerto_11 = format_BPJSPurwokerto_11.readFeatures(json_BPJSPurwokerto_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_BPJSPurwokerto_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BPJSPurwokerto_11.addFeatures(features_BPJSPurwokerto_11);
var lyr_BPJSPurwokerto_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BPJSPurwokerto_11, 
                style: style_BPJSPurwokerto_11,
                popuplayertitle: "BPJS Purwokerto",
                interactive: true,
                title: '<img src="styles/legend/BPJSPurwokerto_11.png" /> BPJS Purwokerto'
            });
var format_KelurahanBerkoh_12 = new ol.format.GeoJSON();
var features_KelurahanBerkoh_12 = format_KelurahanBerkoh_12.readFeatures(json_KelurahanBerkoh_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_KelurahanBerkoh_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KelurahanBerkoh_12.addFeatures(features_KelurahanBerkoh_12);
var lyr_KelurahanBerkoh_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KelurahanBerkoh_12, 
                style: style_KelurahanBerkoh_12,
                popuplayertitle: "Kelurahan Berkoh",
                interactive: true,
    title: 'Kelurahan Berkoh<br />\
    <img src="styles/legend/KelurahanBerkoh_12_0.png" /> <br />'
        });
var format_DealerKendaraan_13 = new ol.format.GeoJSON();
var features_DealerKendaraan_13 = format_DealerKendaraan_13.readFeatures(json_DealerKendaraan_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_DealerKendaraan_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DealerKendaraan_13.addFeatures(features_DealerKendaraan_13);
var lyr_DealerKendaraan_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DealerKendaraan_13, 
                style: style_DealerKendaraan_13,
                popuplayertitle: "Dealer Kendaraan",
                interactive: true,
    title: 'Dealer Kendaraan<br />\
    <img src="styles/legend/DealerKendaraan_13_0.png" /> Daihatsu & Isuzu<br />\
    <img src="styles/legend/DealerKendaraan_13_1.png" /> Joko Motor<br />\
    <img src="styles/legend/DealerKendaraan_13_2.png" /> Mitsubishi<br />\
    <img src="styles/legend/DealerKendaraan_13_3.png" /> Sanjaya Motor<br />\
    <img src="styles/legend/DealerKendaraan_13_4.png" /> Suzuki<br />'
        });
var format_pendidikan_14 = new ol.format.GeoJSON();
var features_pendidikan_14 = format_pendidikan_14.readFeatures(json_pendidikan_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_pendidikan_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_pendidikan_14.addFeatures(features_pendidikan_14);
var lyr_pendidikan_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_pendidikan_14, 
                style: style_pendidikan_14,
                popuplayertitle: "pendidikan",
                interactive: true,
                title: '<img src="styles/legend/pendidikan_14.png" /> pendidikan'
            });
var format_BPBDKabBanyumas_15 = new ol.format.GeoJSON();
var features_BPBDKabBanyumas_15 = format_BPBDKabBanyumas_15.readFeatures(json_BPBDKabBanyumas_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_BPBDKabBanyumas_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BPBDKabBanyumas_15.addFeatures(features_BPBDKabBanyumas_15);
var lyr_BPBDKabBanyumas_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BPBDKabBanyumas_15, 
                style: style_BPBDKabBanyumas_15,
                popuplayertitle: "BPBD Kab Banyumas",
                interactive: true,
    title: 'BPBD Kab Banyumas<br />\
    <img src="styles/legend/BPBDKabBanyumas_15_0.png" /> BPBD Kab Bms<br />\
    <img src="styles/legend/BPBDKabBanyumas_15_1.png" /> <br />'
        });
var format_KPUKabBms_16 = new ol.format.GeoJSON();
var features_KPUKabBms_16 = format_KPUKabBms_16.readFeatures(json_KPUKabBms_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_KPUKabBms_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KPUKabBms_16.addFeatures(features_KPUKabBms_16);
var lyr_KPUKabBms_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KPUKabBms_16, 
                style: style_KPUKabBms_16,
                popuplayertitle: "KPU Kab Bms",
                interactive: true,
    title: 'KPU Kab Bms<br />\
    <img src="styles/legend/KPUKabBms_16_0.png" /> KPU Kab Bms<br />\
    <img src="styles/legend/KPUKabBms_16_1.png" /> <br />'
        });
var format_Kelurahan_17 = new ol.format.GeoJSON();
var features_Kelurahan_17 = format_Kelurahan_17.readFeatures(json_Kelurahan_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Kelurahan_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Kelurahan_17.addFeatures(features_Kelurahan_17);
var lyr_Kelurahan_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Kelurahan_17, 
                style: style_Kelurahan_17,
                popuplayertitle: "Kelurahan",
                interactive: true,
                title: '<img src="styles/legend/Kelurahan_17.png" /> Kelurahan'
            });
var format_BengkelMotor_18 = new ol.format.GeoJSON();
var features_BengkelMotor_18 = format_BengkelMotor_18.readFeatures(json_BengkelMotor_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_BengkelMotor_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BengkelMotor_18.addFeatures(features_BengkelMotor_18);
var lyr_BengkelMotor_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BengkelMotor_18, 
                style: style_BengkelMotor_18,
                popuplayertitle: "Bengkel Motor",
                interactive: true,
                title: '<img src="styles/legend/BengkelMotor_18.png" /> Bengkel Motor'
            });
var format_TempatIbadah_19 = new ol.format.GeoJSON();
var features_TempatIbadah_19 = format_TempatIbadah_19.readFeatures(json_TempatIbadah_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_TempatIbadah_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TempatIbadah_19.addFeatures(features_TempatIbadah_19);
var lyr_TempatIbadah_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TempatIbadah_19, 
                style: style_TempatIbadah_19,
                popuplayertitle: "Tempat Ibadah",
                interactive: true,
                title: '<img src="styles/legend/TempatIbadah_19.png" /> Tempat Ibadah'
            });
var format_Berkoh_point_20 = new ol.format.GeoJSON();
var features_Berkoh_point_20 = format_Berkoh_point_20.readFeatures(json_Berkoh_point_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Berkoh_point_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Berkoh_point_20.addFeatures(features_Berkoh_point_20);
var lyr_Berkoh_point_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Berkoh_point_20, 
                style: style_Berkoh_point_20,
                popuplayertitle: "Berkoh_point",
                interactive: true,
                title: '<img src="styles/legend/Berkoh_point_20.png" /> Berkoh_point'
            });
var format_KetuaRT_21 = new ol.format.GeoJSON();
var features_KetuaRT_21 = format_KetuaRT_21.readFeatures(json_KetuaRT_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_KetuaRT_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KetuaRT_21.addFeatures(features_KetuaRT_21);
var lyr_KetuaRT_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KetuaRT_21, 
                style: style_KetuaRT_21,
                popuplayertitle: "Ketua RT",
                interactive: true,
                title: '<img src="styles/legend/KetuaRT_21.png" /> Ketua RT'
            });
var format_RumahSakit_22 = new ol.format.GeoJSON();
var features_RumahSakit_22 = format_RumahSakit_22.readFeatures(json_RumahSakit_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_RumahSakit_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RumahSakit_22.addFeatures(features_RumahSakit_22);
var lyr_RumahSakit_22 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RumahSakit_22, 
                style: style_RumahSakit_22,
                popuplayertitle: "Rumah Sakit",
                interactive: true,
                title: '<img src="styles/legend/RumahSakit_22.png" /> Rumah Sakit'
            });
var format_Kuliner_23 = new ol.format.GeoJSON();
var features_Kuliner_23 = format_Kuliner_23.readFeatures(json_Kuliner_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Kuliner_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Kuliner_23.addFeatures(features_Kuliner_23);
var lyr_Kuliner_23 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Kuliner_23, 
                style: style_Kuliner_23,
                popuplayertitle: "Kuliner",
                interactive: true,
                title: '<img src="styles/legend/Kuliner_23.png" /> Kuliner'
            });
var format_Penginapan_24 = new ol.format.GeoJSON();
var features_Penginapan_24 = format_Penginapan_24.readFeatures(json_Penginapan_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Penginapan_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Penginapan_24.addFeatures(features_Penginapan_24);
var lyr_Penginapan_24 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Penginapan_24, 
                style: style_Penginapan_24,
                popuplayertitle: "Penginapan",
                interactive: true,
                title: '<img src="styles/legend/Penginapan_24.png" /> Penginapan'
            });
var format_Apotek_25 = new ol.format.GeoJSON();
var features_Apotek_25 = format_Apotek_25.readFeatures(json_Apotek_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Apotek_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Apotek_25.addFeatures(features_Apotek_25);
var lyr_Apotek_25 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Apotek_25, 
                style: style_Apotek_25,
                popuplayertitle: "Apotek",
                interactive: true,
                title: '<img src="styles/legend/Apotek_25.png" /> Apotek'
            });
var format_Rumahku_26 = new ol.format.GeoJSON();
var features_Rumahku_26 = format_Rumahku_26.readFeatures(json_Rumahku_26, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Rumahku_26 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rumahku_26.addFeatures(features_Rumahku_26);
var lyr_Rumahku_26 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Rumahku_26, 
                style: style_Rumahku_26,
                popuplayertitle: "Rumahku",
                interactive: true,
                title: '<img src="styles/legend/Rumahku_26.png" /> Rumahku'
            });

lyr_gadm41_IDN_4_0.setVisible(true);lyr_komplekmargono_1.setVisible(true);lyr_RW_2.setVisible(true);lyr_RT_3.setVisible(true);lyr_Clipped_4.setVisible(true);lyr_Berkoh_line_5.setVisible(true);lyr_KALI_6.setVisible(true);lyr_LapanganTridaya_7.setVisible(true);lyr_Makam_8.setVisible(true);lyr_TamanSatria_9.setVisible(true);lyr_KolamRenang_10.setVisible(true);lyr_BPJSPurwokerto_11.setVisible(true);lyr_KelurahanBerkoh_12.setVisible(true);lyr_DealerKendaraan_13.setVisible(true);lyr_pendidikan_14.setVisible(true);lyr_BPBDKabBanyumas_15.setVisible(true);lyr_KPUKabBms_16.setVisible(true);lyr_Kelurahan_17.setVisible(true);lyr_BengkelMotor_18.setVisible(true);lyr_TempatIbadah_19.setVisible(true);lyr_Berkoh_point_20.setVisible(true);lyr_KetuaRT_21.setVisible(true);lyr_RumahSakit_22.setVisible(true);lyr_Kuliner_23.setVisible(true);lyr_Penginapan_24.setVisible(true);lyr_Apotek_25.setVisible(true);lyr_Rumahku_26.setVisible(true);
var layersList = [lyr_gadm41_IDN_4_0,lyr_komplekmargono_1,lyr_RW_2,lyr_RT_3,lyr_Clipped_4,lyr_Berkoh_line_5,lyr_KALI_6,lyr_LapanganTridaya_7,lyr_Makam_8,lyr_TamanSatria_9,lyr_KolamRenang_10,lyr_BPJSPurwokerto_11,lyr_KelurahanBerkoh_12,lyr_DealerKendaraan_13,lyr_pendidikan_14,lyr_BPBDKabBanyumas_15,lyr_KPUKabBms_16,lyr_Kelurahan_17,lyr_BengkelMotor_18,lyr_TempatIbadah_19,lyr_Berkoh_point_20,lyr_KetuaRT_21,lyr_RumahSakit_22,lyr_Kuliner_23,lyr_Penginapan_24,lyr_Apotek_25,lyr_Rumahku_26];
lyr_gadm41_IDN_4_0.set('fieldAliases', {'GID_4': 'GID_4', 'GID_0': 'GID_0', 'COUNTRY': 'COUNTRY', 'GID_1': 'GID_1', 'NAME_1': 'NAME_1', 'GID_2': 'GID_2', 'NAME_2': 'NAME_2', 'GID_3': 'GID_3', 'NAME_3': 'NAME_3', 'NAME_4': 'NAME_4', 'VARNAME_4': 'VARNAME_4', 'TYPE_4': 'TYPE_4', 'ENGTYPE_4': 'ENGTYPE_4', 'CC_4': 'CC_4', });
lyr_komplekmargono_1.set('fieldAliases', {'id': 'id', 'nama': 'nama', });
lyr_RW_2.set('fieldAliases', {'id': 'id', 'nama': 'nama', });
lyr_RT_3.set('fieldAliases', {'id': 'id', 'nama': 'nama', });
lyr_Clipped_4.set('fieldAliases', {'osm_id': 'osm_id', 'osm_type': 'osm_type', 'health_fac': 'health_fac', 'depth': 'depth', 'place': 'place', 'railway': 'railway', 'operator_t': 'operator_t', 'blockage': 'blockage', 'roof_mater': 'roof_mater', 'rooms': 'rooms', 'tourism': 'tourism', 'amenity': 'amenity', 'name': 'name', 'staff_coun': 'staff_coun', 'public_tra': 'public_tra', 'width': 'width', 'access': 'access', 'bridge': 'bridge', 'smoothness': 'smoothness', 'beds': 'beds', 'covered': 'covered', 'landuse': 'landuse', 'staff_co_1': 'staff_co_1', 'diameter': 'diameter', 'access_roo': 'access_roo', 'building_m': 'building_m', 'healthcare': 'healthcare', 'opening_ho': 'opening_ho', 'isced_leve': 'isced_leve', 'denominati': 'denominati', 'historic': 'historic', 'population': 'population', 'aeroway': 'aeroway', 'status': 'status', 'leisure': 'leisure', 'toilets_di': 'toilets_di', 'waterway': 'waterway', 'parking': 'parking', 'tunnel': 'tunnel', 'building': 'building', 'operator': 'operator', 'barrier': 'barrier', 'capacity': 'capacity', 'man_made': 'man_made', 'health_f_1': 'health_f_1', 'water': 'water', 'admin_leve': 'admin_leve', 'highway': 'highway', 'addr_postc': 'addr_postc', 'pump': 'pump', 'surface': 'surface', 'natural': 'natural', 'oneway': 'oneway', 'addr_stree': 'addr_stree', 'toilets_ha': 'toilets_ha', 'health_f_2': 'health_f_2', 'layer': 'layer', 'shop': 'shop', 'medical_sy': 'medical_sy', 'addr_house': 'addr_house', 'religion': 'religion', 'is_in': 'is_in', 'boundary': 'boundary', });
lyr_Berkoh_line_5.set('fieldAliases', {'osm_id': 'osm_id', 'osm_type': 'osm_type', 'depth': 'depth', 'railway': 'railway', 'blockage': 'blockage', 'amenity': 'amenity', 'name': 'name', 'width': 'width', 'public_tra': 'public_tra', 'bridge': 'bridge', 'smoothness': 'smoothness', 'landuse': 'landuse', 'covered': 'covered', 'diameter': 'diameter', 'aeroway': 'aeroway', 'waterway': 'waterway', 'parking': 'parking', 'tunnel': 'tunnel', 'building': 'building', 'operator': 'operator', 'barrier': 'barrier', 'capacity': 'capacity', 'man_made': 'man_made', 'water': 'water', 'highway': 'highway', 'surface': 'surface', 'pump': 'pump', 'oneway': 'oneway', 'layer': 'layer', 'natural': 'natural', });
lyr_KALI_6.set('fieldAliases', {'osm_id': 'osm_id', 'osm_type': 'osm_type', 'depth': 'depth', 'railway': 'railway', 'blockage': 'blockage', 'amenity': 'amenity', 'name': 'name', 'width': 'width', 'public_tra': 'public_tra', 'bridge': 'bridge', 'smoothness': 'smoothness', 'landuse': 'landuse', 'covered': 'covered', 'diameter': 'diameter', 'aeroway': 'aeroway', 'waterway': 'waterway', 'parking': 'parking', 'tunnel': 'tunnel', 'building': 'building', 'operator': 'operator', 'barrier': 'barrier', 'capacity': 'capacity', 'man_made': 'man_made', 'water': 'water', 'highway': 'highway', 'surface': 'surface', 'pump': 'pump', 'oneway': 'oneway', 'layer': 'layer', 'natural': 'natural', });
lyr_LapanganTridaya_7.set('fieldAliases', {'id': 'id', 'lapangan': 'lapangan', });
lyr_Makam_8.set('fieldAliases', {'id': 'id', 'nama': 'nama', });
lyr_TamanSatria_9.set('fieldAliases', {'id': 'id', 'nama': 'nama', });
lyr_KolamRenang_10.set('fieldAliases', {'id': 'id', 'Klmrenang': 'Klmrenang', });
lyr_BPJSPurwokerto_11.set('fieldAliases', {'id': 'id', 'BPJS': 'BPJS', });
lyr_KelurahanBerkoh_12.set('fieldAliases', {'id': 'id', 'nama': 'nama', });
lyr_DealerKendaraan_13.set('fieldAliases', {'id': 'id', 'nama': 'nama', });
lyr_pendidikan_14.set('fieldAliases', {'id': 'id', 'pendidikan': 'pendidikan', });
lyr_BPBDKabBanyumas_15.set('fieldAliases', {'id': 'id', 'BPBD BMS': 'BPBD BMS', });
lyr_KPUKabBms_16.set('fieldAliases', {'id': 'id', 'KPU Bms': 'KPU Bms', });
lyr_Kelurahan_17.set('fieldAliases', {'id': 'id', 'nama': 'nama', });
lyr_BengkelMotor_18.set('fieldAliases', {'id': 'id', 'nama': 'nama', });
lyr_TempatIbadah_19.set('fieldAliases', {'id': 'id', 'nama': 'nama', });
lyr_Berkoh_point_20.set('fieldAliases', {'osm_id': 'osm_id', 'osm_type': 'osm_type', 'health_fac': 'health_fac', 'depth': 'depth', 'place': 'place', 'railway': 'railway', 'operator_t': 'operator_t', 'blockage': 'blockage', 'roof_mater': 'roof_mater', 'rooms': 'rooms', 'tourism': 'tourism', 'amenity': 'amenity', 'name': 'name', 'staff_coun': 'staff_coun', 'public_tra': 'public_tra', 'width': 'width', 'access': 'access', 'bridge': 'bridge', 'smoothness': 'smoothness', 'beds': 'beds', 'covered': 'covered', 'landuse': 'landuse', 'staff_co_1': 'staff_co_1', 'diameter': 'diameter', 'access_roo': 'access_roo', 'building_m': 'building_m', 'healthcare': 'healthcare', 'opening_ho': 'opening_ho', 'isced_leve': 'isced_leve', 'denominati': 'denominati', 'historic': 'historic', 'population': 'population', 'aeroway': 'aeroway', 'status': 'status', 'leisure': 'leisure', 'toilets_di': 'toilets_di', 'waterway': 'waterway', 'parking': 'parking', 'tunnel': 'tunnel', 'building': 'building', 'operator': 'operator', 'barrier': 'barrier', 'capacity': 'capacity', 'man_made': 'man_made', 'health_f_1': 'health_f_1', 'water': 'water', 'admin_leve': 'admin_leve', 'highway': 'highway', 'addr_postc': 'addr_postc', 'pump': 'pump', 'surface': 'surface', 'natural': 'natural', 'oneway': 'oneway', 'addr_stree': 'addr_stree', 'toilets_ha': 'toilets_ha', 'health_f_2': 'health_f_2', 'layer': 'layer', 'shop': 'shop', 'medical_sy': 'medical_sy', 'addr_house': 'addr_house', 'religion': 'religion', 'is_in': 'is_in', 'boundary': 'boundary', });
lyr_KetuaRT_21.set('fieldAliases', {'id': 'id', 'nama': 'nama', });
lyr_RumahSakit_22.set('fieldAliases', {'id': 'id', 'RumahSakit': 'RumahSakit', });
lyr_Kuliner_23.set('fieldAliases', {'id': 'id', 'nm_kuliner': 'nm_kuliner', });
lyr_Penginapan_24.set('fieldAliases', {'id': 'id', 'nama': 'nama', });
lyr_Apotek_25.set('fieldAliases', {'id': 'id', 'nama': 'nama', });
lyr_Rumahku_26.set('fieldAliases', {'id': 'id', 'nama': 'nama', });
lyr_gadm41_IDN_4_0.set('fieldImages', {'GID_4': 'TextEdit', 'GID_0': 'TextEdit', 'COUNTRY': 'TextEdit', 'GID_1': 'TextEdit', 'NAME_1': 'TextEdit', 'GID_2': 'TextEdit', 'NAME_2': 'TextEdit', 'GID_3': 'TextEdit', 'NAME_3': 'TextEdit', 'NAME_4': 'TextEdit', 'VARNAME_4': 'TextEdit', 'TYPE_4': 'TextEdit', 'ENGTYPE_4': 'TextEdit', 'CC_4': 'TextEdit', });
lyr_komplekmargono_1.set('fieldImages', {'id': 'TextEdit', 'nama': 'TextEdit', });
lyr_RW_2.set('fieldImages', {'id': 'TextEdit', 'nama': 'TextEdit', });
lyr_RT_3.set('fieldImages', {'id': 'TextEdit', 'nama': 'TextEdit', });
lyr_Clipped_4.set('fieldImages', {'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'health_fac': 'TextEdit', 'depth': 'TextEdit', 'place': 'TextEdit', 'railway': 'TextEdit', 'operator_t': 'TextEdit', 'blockage': 'TextEdit', 'roof_mater': 'TextEdit', 'rooms': 'TextEdit', 'tourism': 'TextEdit', 'amenity': 'TextEdit', 'name': 'TextEdit', 'staff_coun': 'TextEdit', 'public_tra': 'TextEdit', 'width': 'TextEdit', 'access': 'TextEdit', 'bridge': 'TextEdit', 'smoothness': 'TextEdit', 'beds': 'TextEdit', 'covered': 'TextEdit', 'landuse': 'TextEdit', 'staff_co_1': 'TextEdit', 'diameter': 'TextEdit', 'access_roo': 'TextEdit', 'building_m': 'TextEdit', 'healthcare': 'TextEdit', 'opening_ho': 'TextEdit', 'isced_leve': 'TextEdit', 'denominati': 'TextEdit', 'historic': 'TextEdit', 'population': 'TextEdit', 'aeroway': 'TextEdit', 'status': 'TextEdit', 'leisure': 'TextEdit', 'toilets_di': 'TextEdit', 'waterway': 'TextEdit', 'parking': 'TextEdit', 'tunnel': 'TextEdit', 'building': 'TextEdit', 'operator': 'TextEdit', 'barrier': 'TextEdit', 'capacity': 'TextEdit', 'man_made': 'TextEdit', 'health_f_1': 'TextEdit', 'water': 'TextEdit', 'admin_leve': 'TextEdit', 'highway': 'TextEdit', 'addr_postc': 'TextEdit', 'pump': 'TextEdit', 'surface': 'TextEdit', 'natural': 'TextEdit', 'oneway': 'TextEdit', 'addr_stree': 'TextEdit', 'toilets_ha': 'TextEdit', 'health_f_2': 'TextEdit', 'layer': 'TextEdit', 'shop': 'TextEdit', 'medical_sy': 'TextEdit', 'addr_house': 'TextEdit', 'religion': 'TextEdit', 'is_in': 'TextEdit', 'boundary': 'TextEdit', });
lyr_Berkoh_line_5.set('fieldImages', {'osm_id': '', 'osm_type': '', 'depth': '', 'railway': '', 'blockage': '', 'amenity': '', 'name': '', 'width': '', 'public_tra': '', 'bridge': '', 'smoothness': '', 'landuse': '', 'covered': '', 'diameter': '', 'aeroway': '', 'waterway': '', 'parking': '', 'tunnel': '', 'building': '', 'operator': '', 'barrier': '', 'capacity': '', 'man_made': '', 'water': '', 'highway': '', 'surface': '', 'pump': '', 'oneway': '', 'layer': '', 'natural': '', });
lyr_KALI_6.set('fieldImages', {'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'depth': 'TextEdit', 'railway': 'TextEdit', 'blockage': 'TextEdit', 'amenity': 'TextEdit', 'name': 'TextEdit', 'width': 'TextEdit', 'public_tra': 'TextEdit', 'bridge': 'TextEdit', 'smoothness': 'TextEdit', 'landuse': 'TextEdit', 'covered': 'TextEdit', 'diameter': 'TextEdit', 'aeroway': 'TextEdit', 'waterway': 'TextEdit', 'parking': 'TextEdit', 'tunnel': 'TextEdit', 'building': 'TextEdit', 'operator': 'TextEdit', 'barrier': 'TextEdit', 'capacity': 'TextEdit', 'man_made': 'TextEdit', 'water': 'TextEdit', 'highway': 'TextEdit', 'surface': 'TextEdit', 'pump': 'TextEdit', 'oneway': 'TextEdit', 'layer': 'TextEdit', 'natural': 'TextEdit', });
lyr_LapanganTridaya_7.set('fieldImages', {'id': 'TextEdit', 'lapangan': 'TextEdit', });
lyr_Makam_8.set('fieldImages', {'id': '', 'nama': '', });
lyr_TamanSatria_9.set('fieldImages', {'id': 'TextEdit', 'nama': 'TextEdit', });
lyr_KolamRenang_10.set('fieldImages', {'id': 'TextEdit', 'Klmrenang': 'TextEdit', });
lyr_BPJSPurwokerto_11.set('fieldImages', {'id': 'TextEdit', 'BPJS': 'TextEdit', });
lyr_KelurahanBerkoh_12.set('fieldImages', {'id': 'TextEdit', 'nama': 'TextEdit', });
lyr_DealerKendaraan_13.set('fieldImages', {'id': '', 'nama': '', });
lyr_pendidikan_14.set('fieldImages', {'id': 'TextEdit', 'pendidikan': 'TextEdit', });
lyr_BPBDKabBanyumas_15.set('fieldImages', {'id': 'TextEdit', 'BPBD BMS': 'TextEdit', });
lyr_KPUKabBms_16.set('fieldImages', {'id': 'TextEdit', 'KPU Bms': 'TextEdit', });
lyr_Kelurahan_17.set('fieldImages', {'id': '', 'nama': '', });
lyr_BengkelMotor_18.set('fieldImages', {'id': 'TextEdit', 'nama': 'TextEdit', });
lyr_TempatIbadah_19.set('fieldImages', {'id': 'TextEdit', 'nama': 'TextEdit', });
lyr_Berkoh_point_20.set('fieldImages', {'osm_id': '', 'osm_type': '', 'health_fac': '', 'depth': '', 'place': '', 'railway': '', 'operator_t': '', 'blockage': '', 'roof_mater': '', 'rooms': '', 'tourism': '', 'amenity': '', 'name': '', 'staff_coun': '', 'public_tra': '', 'width': '', 'access': '', 'bridge': '', 'smoothness': '', 'beds': '', 'covered': '', 'landuse': '', 'staff_co_1': '', 'diameter': '', 'access_roo': '', 'building_m': '', 'healthcare': '', 'opening_ho': '', 'isced_leve': '', 'denominati': '', 'historic': '', 'population': '', 'aeroway': '', 'status': '', 'leisure': '', 'toilets_di': '', 'waterway': '', 'parking': '', 'tunnel': '', 'building': '', 'operator': '', 'barrier': '', 'capacity': '', 'man_made': '', 'health_f_1': '', 'water': '', 'admin_leve': '', 'highway': '', 'addr_postc': '', 'pump': '', 'surface': '', 'natural': '', 'oneway': '', 'addr_stree': '', 'toilets_ha': '', 'health_f_2': '', 'layer': '', 'shop': '', 'medical_sy': '', 'addr_house': '', 'religion': '', 'is_in': '', 'boundary': '', });
lyr_KetuaRT_21.set('fieldImages', {'id': '', 'nama': '', });
lyr_RumahSakit_22.set('fieldImages', {'id': 'TextEdit', 'RumahSakit': 'TextEdit', });
lyr_Kuliner_23.set('fieldImages', {'id': 'TextEdit', 'nm_kuliner': 'TextEdit', });
lyr_Penginapan_24.set('fieldImages', {'id': 'TextEdit', 'nama': 'TextEdit', });
lyr_Apotek_25.set('fieldImages', {'id': 'TextEdit', 'nama': 'TextEdit', });
lyr_Rumahku_26.set('fieldImages', {'id': 'TextEdit', 'nama': 'TextEdit', });
lyr_gadm41_IDN_4_0.set('fieldLabels', {'GID_4': 'hidden field', 'GID_0': 'hidden field', 'COUNTRY': 'hidden field', 'GID_1': 'hidden field', 'NAME_1': 'hidden field', 'GID_2': 'hidden field', 'NAME_2': 'hidden field', 'GID_3': 'hidden field', 'NAME_3': 'hidden field', 'NAME_4': 'hidden field', 'VARNAME_4': 'hidden field', 'TYPE_4': 'hidden field', 'ENGTYPE_4': 'hidden field', 'CC_4': 'hidden field', });
lyr_komplekmargono_1.set('fieldLabels', {'id': 'hidden field', 'nama': 'no label', });
lyr_RW_2.set('fieldLabels', {'id': 'hidden field', 'nama': 'no label', });
lyr_RT_3.set('fieldLabels', {'id': 'hidden field', 'nama': 'no label', });
lyr_Clipped_4.set('fieldLabels', {'osm_id': 'hidden field', 'osm_type': 'hidden field', 'health_fac': 'hidden field', 'depth': 'hidden field', 'place': 'hidden field', 'railway': 'hidden field', 'operator_t': 'hidden field', 'blockage': 'hidden field', 'roof_mater': 'hidden field', 'rooms': 'hidden field', 'tourism': 'hidden field', 'amenity': 'hidden field', 'name': 'no label', 'staff_coun': 'hidden field', 'public_tra': 'hidden field', 'width': 'hidden field', 'access': 'hidden field', 'bridge': 'hidden field', 'smoothness': 'hidden field', 'beds': 'hidden field', 'covered': 'hidden field', 'landuse': 'hidden field', 'staff_co_1': 'hidden field', 'diameter': 'hidden field', 'access_roo': 'hidden field', 'building_m': 'hidden field', 'healthcare': 'hidden field', 'opening_ho': 'hidden field', 'isced_leve': 'hidden field', 'denominati': 'hidden field', 'historic': 'hidden field', 'population': 'hidden field', 'aeroway': 'hidden field', 'status': 'hidden field', 'leisure': 'hidden field', 'toilets_di': 'hidden field', 'waterway': 'hidden field', 'parking': 'hidden field', 'tunnel': 'hidden field', 'building': 'hidden field', 'operator': 'hidden field', 'barrier': 'hidden field', 'capacity': 'hidden field', 'man_made': 'hidden field', 'health_f_1': 'hidden field', 'water': 'hidden field', 'admin_leve': 'hidden field', 'highway': 'hidden field', 'addr_postc': 'hidden field', 'pump': 'hidden field', 'surface': 'hidden field', 'natural': 'hidden field', 'oneway': 'hidden field', 'addr_stree': 'hidden field', 'toilets_ha': 'hidden field', 'health_f_2': 'hidden field', 'layer': 'hidden field', 'shop': 'hidden field', 'medical_sy': 'hidden field', 'addr_house': 'hidden field', 'religion': 'hidden field', 'is_in': 'hidden field', 'boundary': 'hidden field', });
lyr_Berkoh_line_5.set('fieldLabels', {'osm_id': 'hidden field', 'osm_type': 'hidden field', 'depth': 'hidden field', 'railway': 'hidden field', 'blockage': 'hidden field', 'amenity': 'hidden field', 'name': 'no label', 'width': 'hidden field', 'public_tra': 'hidden field', 'bridge': 'hidden field', 'smoothness': 'hidden field', 'landuse': 'hidden field', 'covered': 'hidden field', 'diameter': 'hidden field', 'aeroway': 'hidden field', 'waterway': 'hidden field', 'parking': 'hidden field', 'tunnel': 'hidden field', 'building': 'hidden field', 'operator': 'hidden field', 'barrier': 'hidden field', 'capacity': 'hidden field', 'man_made': 'hidden field', 'water': 'hidden field', 'highway': 'hidden field', 'surface': 'hidden field', 'pump': 'hidden field', 'oneway': 'hidden field', 'layer': 'hidden field', 'natural': 'hidden field', });
lyr_KALI_6.set('fieldLabels', {'osm_id': 'no label', 'osm_type': 'no label', 'depth': 'no label', 'railway': 'no label', 'blockage': 'no label', 'amenity': 'no label', 'name': 'no label', 'width': 'no label', 'public_tra': 'no label', 'bridge': 'no label', 'smoothness': 'no label', 'landuse': 'no label', 'covered': 'no label', 'diameter': 'no label', 'aeroway': 'no label', 'waterway': 'no label', 'parking': 'no label', 'tunnel': 'no label', 'building': 'no label', 'operator': 'no label', 'barrier': 'no label', 'capacity': 'no label', 'man_made': 'no label', 'water': 'no label', 'highway': 'no label', 'surface': 'no label', 'pump': 'no label', 'oneway': 'no label', 'layer': 'no label', 'natural': 'no label', });
lyr_LapanganTridaya_7.set('fieldLabels', {'id': 'hidden field', 'lapangan': 'no label', });
lyr_Makam_8.set('fieldLabels', {'id': 'hidden field', 'nama': 'no label', });
lyr_TamanSatria_9.set('fieldLabels', {'id': 'hidden field', 'nama': 'no label', });
lyr_KolamRenang_10.set('fieldLabels', {'id': 'hidden field', 'Klmrenang': 'no label', });
lyr_BPJSPurwokerto_11.set('fieldLabels', {'id': 'hidden field', 'BPJS': 'no label', });
lyr_KelurahanBerkoh_12.set('fieldLabels', {'id': 'hidden field', 'nama': 'no label', });
lyr_DealerKendaraan_13.set('fieldLabels', {'id': 'hidden field', 'nama': 'no label', });
lyr_pendidikan_14.set('fieldLabels', {'id': 'hidden field', 'pendidikan': 'no label', });
lyr_BPBDKabBanyumas_15.set('fieldLabels', {'id': 'hidden field', 'BPBD BMS': 'no label', });
lyr_KPUKabBms_16.set('fieldLabels', {'id': 'hidden field', 'KPU Bms': 'no label', });
lyr_Kelurahan_17.set('fieldLabels', {'id': 'no label', 'nama': 'no label', });
lyr_BengkelMotor_18.set('fieldLabels', {'id': 'no label', 'nama': 'no label', });
lyr_TempatIbadah_19.set('fieldLabels', {'id': 'hidden field', 'nama': 'no label', });
lyr_Berkoh_point_20.set('fieldLabels', {'osm_id': 'hidden field', 'osm_type': 'hidden field', 'health_fac': 'hidden field', 'depth': 'hidden field', 'place': 'hidden field', 'railway': 'hidden field', 'operator_t': 'hidden field', 'blockage': 'hidden field', 'roof_mater': 'hidden field', 'rooms': 'hidden field', 'tourism': 'hidden field', 'amenity': 'hidden field', 'name': 'hidden field', 'staff_coun': 'hidden field', 'public_tra': 'hidden field', 'width': 'hidden field', 'access': 'hidden field', 'bridge': 'no label', 'smoothness': 'no label', 'beds': 'hidden field', 'covered': 'hidden field', 'landuse': 'hidden field', 'staff_co_1': 'hidden field', 'diameter': 'hidden field', 'access_roo': 'hidden field', 'building_m': 'hidden field', 'healthcare': 'hidden field', 'opening_ho': 'hidden field', 'isced_leve': 'hidden field', 'denominati': 'hidden field', 'historic': 'hidden field', 'population': 'hidden field', 'aeroway': 'hidden field', 'status': 'hidden field', 'leisure': 'hidden field', 'toilets_di': 'hidden field', 'waterway': 'hidden field', 'parking': 'hidden field', 'tunnel': 'hidden field', 'building': 'hidden field', 'operator': 'hidden field', 'barrier': 'hidden field', 'capacity': 'hidden field', 'man_made': 'hidden field', 'health_f_1': 'hidden field', 'water': 'hidden field', 'admin_leve': 'hidden field', 'highway': 'hidden field', 'addr_postc': 'hidden field', 'pump': 'hidden field', 'surface': 'hidden field', 'natural': 'hidden field', 'oneway': 'hidden field', 'addr_stree': 'hidden field', 'toilets_ha': 'hidden field', 'health_f_2': 'hidden field', 'layer': 'hidden field', 'shop': 'hidden field', 'medical_sy': 'hidden field', 'addr_house': 'hidden field', 'religion': 'hidden field', 'is_in': 'hidden field', 'boundary': 'hidden field', });
lyr_KetuaRT_21.set('fieldLabels', {'id': 'no label', 'nama': 'no label', });
lyr_RumahSakit_22.set('fieldLabels', {'id': 'hidden field', 'RumahSakit': 'no label', });
lyr_Kuliner_23.set('fieldLabels', {'id': 'hidden field', 'nm_kuliner': 'no label', });
lyr_Penginapan_24.set('fieldLabels', {'id': 'hidden field', 'nama': 'no label', });
lyr_Apotek_25.set('fieldLabels', {'id': 'no label', 'nama': 'no label', });
lyr_Rumahku_26.set('fieldLabels', {'id': 'no label', 'nama': 'no label', });
lyr_Rumahku_26.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});