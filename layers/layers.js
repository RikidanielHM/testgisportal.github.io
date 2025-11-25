var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_jakpus_kec_1 = new ol.format.GeoJSON();
var features_jakpus_kec_1 = format_jakpus_kec_1.readFeatures(json_jakpus_kec_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_jakpus_kec_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_jakpus_kec_1.addFeatures(features_jakpus_kec_1);
var lyr_jakpus_kec_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_jakpus_kec_1, 
                style: style_jakpus_kec_1,
                popuplayertitle: 'jakpus_kec',
                interactive: true,
                title: '<img src="styles/legend/jakpus_kec_1.png" /> jakpus_kec'
            });
var format_Rute_TJ_JAK_2 = new ol.format.GeoJSON();
var features_Rute_TJ_JAK_2 = format_Rute_TJ_JAK_2.readFeatures(json_Rute_TJ_JAK_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Rute_TJ_JAK_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rute_TJ_JAK_2.addFeatures(features_Rute_TJ_JAK_2);
var lyr_Rute_TJ_JAK_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Rute_TJ_JAK_2, 
                style: style_Rute_TJ_JAK_2,
                popuplayertitle: 'Rute_TJ_JAK',
                interactive: true,
                title: '<img src="styles/legend/Rute_TJ_JAK_2.png" /> Rute_TJ_JAK'
            });
var format_Halte_3 = new ol.format.GeoJSON();
var features_Halte_3 = format_Halte_3.readFeatures(json_Halte_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Halte_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Halte_3.addFeatures(features_Halte_3);
var lyr_Halte_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Halte_3, 
                style: style_Halte_3,
                popuplayertitle: 'Halte',
                interactive: true,
                title: '<img src="styles/legend/Halte_3.png" /> Halte'
            });

lyr_OSMStandard_0.setVisible(true);lyr_jakpus_kec_1.setVisible(true);lyr_Rute_TJ_JAK_2.setVisible(true);lyr_Halte_3.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_jakpus_kec_1,lyr_Rute_TJ_JAK_2,lyr_Halte_3];
lyr_jakpus_kec_1.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'LUASWH': 'LUASWH', 'TIPADM': 'TIPADM', 'WADMKC': 'WADMKC', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'luas': 'luas', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_Rute_TJ_JAK_2.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'METADATA': 'METADATA', 'SRS_ID': 'SRS_ID', 'SHAPE_Leng': 'SHAPE_Leng', 'WADMKD': 'WADMKD', 'WADMKC': 'WADMKC', 'WADMKK': 'WADMKK', });
lyr_Halte_3.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'METADATA': 'METADATA', 'SRS_ID': 'SRS_ID', 'WADMKD': 'WADMKD', 'WADMKC': 'WADMKC', 'WADMKK': 'WADMKK', });
lyr_jakpus_kec_1.set('fieldImages', {'NAMOBJ': 'TextEdit', 'LUASWH': 'TextEdit', 'TIPADM': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'luas': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_Rute_TJ_JAK_2.set('fieldImages', {'NAMOBJ': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'METADATA': 'TextEdit', 'SRS_ID': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'WADMKD': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKK': 'TextEdit', });
lyr_Halte_3.set('fieldImages', {'NAMOBJ': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'METADATA': 'TextEdit', 'SRS_ID': 'TextEdit', 'WADMKD': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKK': 'TextEdit', });
lyr_jakpus_kec_1.set('fieldLabels', {'NAMOBJ': 'inline label - visible with data', 'LUASWH': 'inline label - visible with data', 'TIPADM': 'no label', 'WADMKC': 'inline label - visible with data', 'WADMKK': 'inline label - visible with data', 'WADMPR': 'inline label - visible with data', 'luas': 'inline label - visible with data', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_Rute_TJ_JAK_2.set('fieldLabels', {'NAMOBJ': 'inline label - visible with data', 'FCODE': 'hidden field', 'REMARK': 'inline label - visible with data', 'METADATA': 'no label', 'SRS_ID': 'no label', 'SHAPE_Leng': 'no label', 'WADMKD': 'no label', 'WADMKC': 'no label', 'WADMKK': 'no label', });
lyr_Halte_3.set('fieldLabels', {'NAMOBJ': 'inline label - visible with data', 'FCODE': 'hidden field', 'REMARK': 'inline label - visible with data', 'METADATA': 'no label', 'SRS_ID': 'no label', 'WADMKD': 'no label', 'WADMKC': 'no label', 'WADMKK': 'no label', });
lyr_Halte_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});