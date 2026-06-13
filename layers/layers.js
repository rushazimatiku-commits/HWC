var wms_layers = [];


        var lyr_EsriStreet_0 = new ol.layer.Tile({
            'title': 'Esri Street',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://server.arcgisonline.com/arcgis/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_StudyArea_PointsVillages_1 = new ol.format.GeoJSON();
var features_StudyArea_PointsVillages_1 = format_StudyArea_PointsVillages_1.readFeatures(json_StudyArea_PointsVillages_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_StudyArea_PointsVillages_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_StudyArea_PointsVillages_1.addFeatures(features_StudyArea_PointsVillages_1);
var lyr_StudyArea_PointsVillages_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_StudyArea_PointsVillages_1, 
                style: style_StudyArea_PointsVillages_1,
                popuplayertitle: 'StudyArea_Points&Villages',
                interactive: true,
                title: '<img src="styles/legend/StudyArea_PointsVillages_1.png" /> StudyArea_Points&Villages'
            });
var format_GeoAI1_2 = new ol.format.GeoJSON();
var features_GeoAI1_2 = format_GeoAI1_2.readFeatures(json_GeoAI1_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GeoAI1_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GeoAI1_2.addFeatures(features_GeoAI1_2);
var lyr_GeoAI1_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GeoAI1_2, 
                style: style_GeoAI1_2,
                popuplayertitle: 'GeoAI1',
                interactive: true,
    title: 'GeoAI1<br />\
    <img src="styles/legend/GeoAI1_2_0.png" /> Anteelops killed by villagers<br />\
    <img src="styles/legend/GeoAI1_2_1.png" /> Antelops killed by villagers<br />\
    <img src="styles/legend/GeoAI1_2_2.png" /> Cattles were killed<br />\
    <img src="styles/legend/GeoAI1_2_3.png" /> Cow were killed<br />\
    <img src="styles/legend/GeoAI1_2_4.png" /> Crocdile injured person<br />\
    <img src="styles/legend/GeoAI1_2_5.png" /> Crockdile injured person<br />\
    <img src="styles/legend/GeoAI1_2_6.png" /> Crockdile killed villagers<br />\
    <img src="styles/legend/GeoAI1_2_7.png" /> Crocodile killed a villager<br />\
    <img src="styles/legend/GeoAI1_2_8.png" /> Elepant demolished the house<br />\
    <img src="styles/legend/GeoAI1_2_9.png" /> Elephant damaged crops<br />\
    <img src="styles/legend/GeoAI1_2_10.png" /> Elephant Damaged Crops<br />\
    <img src="styles/legend/GeoAI1_2_11.png" /> Elephant dameged crops<br />\
    <img src="styles/legend/GeoAI1_2_12.png" /> Elephant demolished a house<br />\
    <img src="styles/legend/GeoAI1_2_13.png" /> Elephant demolished the house<br />\
    <img src="styles/legend/GeoAI1_2_14.png" /> Elephant eat and damaged crops<br />\
    <img src="styles/legend/GeoAI1_2_15.png" /> Elephant eat crops<br />\
    <img src="styles/legend/GeoAI1_2_16.png" /> Elephant eats crops<br />\
    <img src="styles/legend/GeoAI1_2_17.png" /> Elephant has demolished the house<br />\
    <img src="styles/legend/GeoAI1_2_18.png" /> Elephant killed<br />\
    <img src="styles/legend/GeoAI1_2_19.png" /> Elephant killed  livestokes<br />\
    <img src="styles/legend/GeoAI1_2_20.png" /> Elephant killed by Civillians<br />\
    <img src="styles/legend/GeoAI1_2_21.png" /> Elephant killed cattle<br />\
    <img src="styles/legend/GeoAI1_2_22.png" /> Elephant killed person<br />\
    <img src="styles/legend/GeoAI1_2_23.png" /> Elephant killed villager<br />\
    <img src="styles/legend/GeoAI1_2_24.png" /> Elephant killed villagers<br />\
    <img src="styles/legend/GeoAI1_2_25.png" /> Elephant killed Villagers<br />\
    <img src="styles/legend/GeoAI1_2_26.png" /> Elephant killed villerger<br />\
    <img src="styles/legend/GeoAI1_2_27.png" /> Elephant were killed<br />\
    <img src="styles/legend/GeoAI1_2_28.png" /> Elephant were killedr<br />\
    <img src="styles/legend/GeoAI1_2_29.png" /> Elephants damaged crops<br />\
    <img src="styles/legend/GeoAI1_2_30.png" /> Elephants Dammeged crops<br />\
    <img src="styles/legend/GeoAI1_2_31.png" /> Elephants eat and damaged crops<br />\
    <img src="styles/legend/GeoAI1_2_32.png" /> Elephants killed villagers<br />\
    <img src="styles/legend/GeoAI1_2_33.png" /> Elephat damaged crops<br />\
    <img src="styles/legend/GeoAI1_2_34.png" /> Elephat damageg crops<br />\
    <img src="styles/legend/GeoAI1_2_35.png" /> Elephat eats crops<br />\
    <img src="styles/legend/GeoAI1_2_36.png" /> Farm were destroyed<br />\
    <img src="styles/legend/GeoAI1_2_37.png" /> Golilla eats crops<br />\
    <img src="styles/legend/GeoAI1_2_38.png" /> Gollila eats crops<br />\
    <img src="styles/legend/GeoAI1_2_39.png" /> Hippopotamus destroyed crops<br />\
    <img src="styles/legend/GeoAI1_2_40.png" /> Hippopotamus killed a person<br />\
    <img src="styles/legend/GeoAI1_2_41.png" /> Hippopotamus killed villager<br />\
    <img src="styles/legend/GeoAI1_2_42.png" /> Hippopotamus were killed<br />\
    <img src="styles/legend/GeoAI1_2_43.png" /> Hippopotmus injured person<br />\
    <img src="styles/legend/GeoAI1_2_44.png" /> Hyena eated a child<br />\
    <img src="styles/legend/GeoAI1_2_45.png" /> Hyena injured a child<br />\
    <img src="styles/legend/GeoAI1_2_46.png" /> Hyena killed<br />\
    <img src="styles/legend/GeoAI1_2_47.png" /> Hyena Killed by Villagers<br />\
    <img src="styles/legend/GeoAI1_2_48.png" /> Hyenas eats livestocks<br />\
    <img src="styles/legend/GeoAI1_2_49.png" /> Hyenas injured a child<br />\
    <img src="styles/legend/GeoAI1_2_50.png" /> Hyenas killed cattles<br />\
    <img src="styles/legend/GeoAI1_2_51.png" /> Hyenas Prey on cattles<br />\
    <img src="styles/legend/GeoAI1_2_52.png" /> hyenas preys on cattles<br />\
    <img src="styles/legend/GeoAI1_2_53.png" /> Injured Lions by villagers spears<br />\
    <img src="styles/legend/GeoAI1_2_54.png" /> Killed and eaten cattles by wild animals<br />\
    <img src="styles/legend/GeoAI1_2_55.png" /> Killed Elephant<br />\
    <img src="styles/legend/GeoAI1_2_56.png" /> Killed Hyena by villagers<br />\
    <img src="styles/legend/GeoAI1_2_57.png" /> Leapads pyeyed on cattles<br />\
    <img src="styles/legend/GeoAI1_2_58.png" /> Leopad eats cattles<br />\
    <img src="styles/legend/GeoAI1_2_59.png" /> Leopads eats cattles<br />\
    <img src="styles/legend/GeoAI1_2_60.png" /> Leopads preyed on cattles<br />\
    <img src="styles/legend/GeoAI1_2_61.png" /> Lion killed person<br />\
    <img src="styles/legend/GeoAI1_2_62.png" /> Lion killed villager<br />\
    <img src="styles/legend/GeoAI1_2_63.png" /> Lion Killed villager<br />\
    <img src="styles/legend/GeoAI1_2_64.png" /> Lion were killed<br />\
    <img src="styles/legend/GeoAI1_2_65.png" /> Lions  preys on cattle<br />\
    <img src="styles/legend/GeoAI1_2_66.png" /> Lions eats cattles<br />\
    <img src="styles/legend/GeoAI1_2_67.png" /> Lions killed villager<br />\
    <img src="styles/legend/GeoAI1_2_68.png" /> Lions prayed on cattles<br />\
    <img src="styles/legend/GeoAI1_2_69.png" /> Lions prey on cattles<br />\
    <img src="styles/legend/GeoAI1_2_70.png" /> Lions preyed on cattles<br />\
    <img src="styles/legend/GeoAI1_2_71.png" /> Lions preys on cattle<br />\
    <img src="styles/legend/GeoAI1_2_72.png" /> Lions preys on cattles<br />\
    <img src="styles/legend/GeoAI1_2_73.png" /> Livestock were killed<br />\
    <img src="styles/legend/GeoAI1_2_74.png" /> Livestocks were Killed<br />\
    <img src="styles/legend/GeoAI1_2_75.png" /> Livestok were killed<br />\
    <img src="styles/legend/GeoAI1_2_76.png" /> Maize farm were destroyed<br />\
    <img src="styles/legend/GeoAI1_2_77.png" /> Monkey damaged crops<br />\
    <img src="styles/legend/GeoAI1_2_78.png" /> Monkey easts crops<br />\
    <img src="styles/legend/GeoAI1_2_79.png" /> Warthog destroyed crops<br />\
    <img src="styles/legend/GeoAI1_2_80.png" /> Wild animals damaged crops<br />\
    <img src="styles/legend/GeoAI1_2_81.png" /> Wild aninals damaged crops<br />\
    <img src="styles/legend/GeoAI1_2_82.png" /> Wild boar damaged crops<br />\
    <img src="styles/legend/GeoAI1_2_83.png" /> Wild boar destroyed crops<br />\
    <img src="styles/legend/GeoAI1_2_84.png" /> <br />' });

lyr_EsriStreet_0.setVisible(true);lyr_StudyArea_PointsVillages_1.setVisible(true);lyr_GeoAI1_2.setVisible(true);
var layersList = [lyr_EsriStreet_0,lyr_StudyArea_PointsVillages_1,lyr_GeoAI1_2];
lyr_StudyArea_PointsVillages_1.set('fieldAliases', {'Join_Count': 'Join_Count', 'TARGET_FID': 'TARGET_FID', 'X': 'X', 'Y': 'Y', 'Type_of_Co': 'Type_of_Co', 'field_4': 'field_4', 'Joint_Code': 'Joint_Code', 'Date': 'Date', 'Year': 'Year', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'M_Kiti_Kij': 'M_Kiti_Kij', 'field_12': 'field_12', 'field_13': 'field_13', 'field_14': 'field_14', 'TAREHE': 'TAREHE', 'OBJECTID': 'OBJECTID', 'Region_Cod': 'Region_Cod', 'Region_Nam': 'Region_Nam', 'District_C': 'District_C', 'District_N': 'District_N', 'Ward_Code': 'Ward_Code', 'Ward_Name': 'Ward_Name', 'Vil_Mtaa_C': 'Vil_Mtaa_C', 'Vil_Mtaa_N': 'Vil_Mtaa_N', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_GeoAI1_2.set('fieldAliases', {'Join_Count': 'Join_Count', 'TARGET_FID': 'TARGET_FID', 'X': 'X', 'Y': 'Y', 'Type_of_Co': 'Type_of_Co', 'field_4': 'field_4', 'Joint_Code': 'Joint_Code', 'Date': 'Date', 'Year': 'Year', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'M_Kiti_Kij': 'M_Kiti_Kij', 'field_12': 'field_12', 'field_13': 'field_13', 'field_14': 'field_14', 'TAREHE': 'TAREHE', 'OBJECTID': 'OBJECTID', 'Region_Cod': 'Region_Cod', 'Region_Nam': 'Region_Nam', 'District_C': 'District_C', 'District_N': 'District_N', 'Ward_Code': 'Ward_Code', 'Ward_Name': 'Ward_Name', 'Vil_Mtaa_C': 'Vil_Mtaa_C', 'Vil_Mtaa_N': 'Vil_Mtaa_N', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_StudyArea_PointsVillages_1.set('fieldImages', {'Join_Count': '', 'TARGET_FID': '', 'X': '', 'Y': '', 'Type_of_Co': '', 'field_4': '', 'Joint_Code': '', 'Date': '', 'Year': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'M_Kiti_Kij': '', 'field_12': '', 'field_13': '', 'field_14': '', 'TAREHE': '', 'OBJECTID': '', 'Region_Cod': '', 'Region_Nam': '', 'District_C': '', 'District_N': '', 'Ward_Code': '', 'Ward_Name': '', 'Vil_Mtaa_C': '', 'Vil_Mtaa_N': '', 'Shape_Leng': '', 'Shape_Area': '', });
lyr_GeoAI1_2.set('fieldImages', {'Join_Count': 'TextEdit', 'TARGET_FID': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'Type_of_Co': 'TextEdit', 'field_4': 'TextEdit', 'Joint_Code': 'TextEdit', 'Date': 'TextEdit', 'Year': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'Range', 'visibility': 'TextEdit', 'M_Kiti_Kij': 'TextEdit', 'field_12': 'TextEdit', 'field_13': 'TextEdit', 'field_14': 'TextEdit', 'TAREHE': 'TextEdit', 'OBJECTID': 'Range', 'Region_Cod': 'TextEdit', 'Region_Nam': 'TextEdit', 'District_C': 'TextEdit', 'District_N': 'TextEdit', 'Ward_Code': 'TextEdit', 'Ward_Name': 'TextEdit', 'Vil_Mtaa_C': 'TextEdit', 'Vil_Mtaa_N': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_StudyArea_PointsVillages_1.set('fieldLabels', {'Join_Count': 'no label', 'TARGET_FID': 'no label', 'X': 'no label', 'Y': 'no label', 'Type_of_Co': 'no label', 'field_4': 'no label', 'Joint_Code': 'no label', 'Date': 'no label', 'Year': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'M_Kiti_Kij': 'no label', 'field_12': 'no label', 'field_13': 'no label', 'field_14': 'no label', 'TAREHE': 'no label', 'OBJECTID': 'no label', 'Region_Cod': 'no label', 'Region_Nam': 'no label', 'District_C': 'no label', 'District_N': 'no label', 'Ward_Code': 'no label', 'Ward_Name': 'no label', 'Vil_Mtaa_C': 'no label', 'Vil_Mtaa_N': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_GeoAI1_2.set('fieldLabels', {'Join_Count': 'header label - visible with data', 'TARGET_FID': 'no label', 'X': 'header label - visible with data', 'Y': 'header label - visible with data', 'Type_of_Co': 'no label', 'field_4': 'no label', 'Joint_Code': 'no label', 'Date': 'no label', 'Year': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'M_Kiti_Kij': 'no label', 'field_12': 'no label', 'field_13': 'no label', 'field_14': 'no label', 'TAREHE': 'no label', 'OBJECTID': 'no label', 'Region_Cod': 'no label', 'Region_Nam': 'no label', 'District_C': 'no label', 'District_N': 'no label', 'Ward_Code': 'no label', 'Ward_Name': 'no label', 'Vil_Mtaa_C': 'no label', 'Vil_Mtaa_N': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_GeoAI1_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});