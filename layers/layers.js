var wms_layers = [];


        var lyr_EsriStreet_0 = new ol.layer.Tile({
            'title': 'Esri Street',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://server.arcgisonline.com/arcgis/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_StudyArea_PointVillages3Projected_1 = new ol.format.GeoJSON();
var features_StudyArea_PointVillages3Projected_1 = format_StudyArea_PointVillages3Projected_1.readFeatures(json_StudyArea_PointVillages3Projected_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_StudyArea_PointVillages3Projected_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_StudyArea_PointVillages3Projected_1.addFeatures(features_StudyArea_PointVillages3Projected_1);
var lyr_StudyArea_PointVillages3Projected_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_StudyArea_PointVillages3Projected_1, 
                style: style_StudyArea_PointVillages3Projected_1,
                popuplayertitle: 'StudyArea_Point&Villages3-Projected',
                interactive: true,
    title: 'StudyArea_Point&Villages3-Projected<br />\
    <img src="styles/legend/StudyArea_PointVillages3Projected_1_0.png" /> Anteelops killed by villagers<br />\
    <img src="styles/legend/StudyArea_PointVillages3Projected_1_1.png" /> Antelops killed by villagers<br />\
    <img src="styles/legend/StudyArea_PointVillages3Projected_1_2.png" /> Cattles were killed<br />\
    <img src="styles/legend/StudyArea_PointVillages3Projected_1_3.png" /> Cow were killed<br />\
    <img src="styles/legend/StudyArea_PointVillages3Projected_1_4.png" /> Crocdile injured person<br />\
    <img src="styles/legend/StudyArea_PointVillages3Projected_1_5.png" /> Crockdile injured person<br />\
    <img src="styles/legend/StudyArea_PointVillages3Projected_1_6.png" /> Crockdile killed villagers<br />\
    <img src="styles/legend/StudyArea_PointVillages3Projected_1_7.png" /> Crocodile killed a villager<br />\
    <img src="styles/legend/StudyArea_PointVillages3Projected_1_8.png" /> Elepant demolished the house<br />\
    <img src="styles/legend/StudyArea_PointVillages3Projected_1_9.png" /> Elephant damaged crops<br />\
    <img src="styles/legend/StudyArea_PointVillages3Projected_1_10.png" /> Elephant Damaged Crops<br />\
    <img src="styles/legend/StudyArea_PointVillages3Projected_1_11.png" /> Elephant dameged crops<br />\
    <img src="styles/legend/StudyArea_PointVillages3Projected_1_12.png" /> Elephant demolished a house<br />\
    <img src="styles/legend/StudyArea_PointVillages3Projected_1_13.png" /> Elephant demolished the house<br />\
    <img src="styles/legend/StudyArea_PointVillages3Projected_1_14.png" /> Elephant eat and damaged crops<br />\
    <img src="styles/legend/StudyArea_PointVillages3Projected_1_15.png" /> Elephant eat crops<br />\
    <img src="styles/legend/StudyArea_PointVillages3Projected_1_16.png" /> Elephant eats crops<br />\
    <img src="styles/legend/StudyArea_PointVillages3Projected_1_17.png" /> Elephant has demolished the house<br />\
    <img src="styles/legend/StudyArea_PointVillages3Projected_1_18.png" /> Elephant killed<br />\
    <img src="styles/legend/StudyArea_PointVillages3Projected_1_19.png" /> Elephant killed  livestokes<br />\
    <img src="styles/legend/StudyArea_PointVillages3Projected_1_20.png" /> Elephant killed by Civillians<br />\
    <img src="styles/legend/StudyArea_PointVillages3Projected_1_21.png" /> Elephant killed cattle<br />\
    <img src="styles/legend/StudyArea_PointVillages3Projected_1_22.png" /> Elephant killed person<br />\
    <img src="styles/legend/StudyArea_PointVillages3Projected_1_23.png" /> Elephant killed villager<br />\
    <img src="styles/legend/StudyArea_PointVillages3Projected_1_24.png" /> Elephant killed villagers<br />\
    <img src="styles/legend/StudyArea_PointVillages3Projected_1_25.png" /> Elephant killed Villagers<br />\
    <img src="styles/legend/StudyArea_PointVillages3Projected_1_26.png" /> Elephant killed villerger<br />\
    <img src="styles/legend/StudyArea_PointVillages3Projected_1_27.png" /> Elephant were killed<br />\
    <img src="styles/legend/StudyArea_PointVillages3Projected_1_28.png" /> Elephant were killedr<br />\
    <img src="styles/legend/StudyArea_PointVillages3Projected_1_29.png" /> Elephants damaged crops<br />\
    <img src="styles/legend/StudyArea_PointVillages3Projected_1_30.png" /> Elephants Dammeged crops<br />\
    <img src="styles/legend/StudyArea_PointVillages3Projected_1_31.png" /> Elephants eat and damaged crops<br />\
    <img src="styles/legend/StudyArea_PointVillages3Projected_1_32.png" /> Elephants killed villagers<br />\
    <img src="styles/legend/StudyArea_PointVillages3Projected_1_33.png" /> Elephat damaged crops<br />\
    <img src="styles/legend/StudyArea_PointVillages3Projected_1_34.png" /> Elephat damageg crops<br />\
    <img src="styles/legend/StudyArea_PointVillages3Projected_1_35.png" /> Elephat eats crops<br />\
    <img src="styles/legend/StudyArea_PointVillages3Projected_1_36.png" /> Farm were destroyed<br />\
    <img src="styles/legend/StudyArea_PointVillages3Projected_1_37.png" /> Golilla eats crops<br />\
    <img src="styles/legend/StudyArea_PointVillages3Projected_1_38.png" /> Gollila eats crops<br />\
    <img src="styles/legend/StudyArea_PointVillages3Projected_1_39.png" /> Hippopotamus destroyed crops<br />\
    <img src="styles/legend/StudyArea_PointVillages3Projected_1_40.png" /> Hippopotamus killed a person<br />\
    <img src="styles/legend/StudyArea_PointVillages3Projected_1_41.png" /> Hippopotamus killed villager<br />\
    <img src="styles/legend/StudyArea_PointVillages3Projected_1_42.png" /> Hippopotamus were killed<br />\
    <img src="styles/legend/StudyArea_PointVillages3Projected_1_43.png" /> Hippopotmus injured person<br />\
    <img src="styles/legend/StudyArea_PointVillages3Projected_1_44.png" /> Hyena eated a child<br />\
    <img src="styles/legend/StudyArea_PointVillages3Projected_1_45.png" /> Hyena injured a child<br />\
    <img src="styles/legend/StudyArea_PointVillages3Projected_1_46.png" /> Hyena killed<br />\
    <img src="styles/legend/StudyArea_PointVillages3Projected_1_47.png" /> Hyena Killed by Villagers<br />\
    <img src="styles/legend/StudyArea_PointVillages3Projected_1_48.png" /> Hyenas eats livestocks<br />\
    <img src="styles/legend/StudyArea_PointVillages3Projected_1_49.png" /> Hyenas injured a child<br />\
    <img src="styles/legend/StudyArea_PointVillages3Projected_1_50.png" /> Hyenas killed cattles<br />\
    <img src="styles/legend/StudyArea_PointVillages3Projected_1_51.png" /> Hyenas Prey on cattles<br />\
    <img src="styles/legend/StudyArea_PointVillages3Projected_1_52.png" /> hyenas preys on cattles<br />\
    <img src="styles/legend/StudyArea_PointVillages3Projected_1_53.png" /> Injured Lions by villagers spears<br />\
    <img src="styles/legend/StudyArea_PointVillages3Projected_1_54.png" /> Killed and eaten cattles by wild animals<br />\
    <img src="styles/legend/StudyArea_PointVillages3Projected_1_55.png" /> Killed Elephant<br />\
    <img src="styles/legend/StudyArea_PointVillages3Projected_1_56.png" /> Killed Hyena by villagers<br />\
    <img src="styles/legend/StudyArea_PointVillages3Projected_1_57.png" /> Leapads pyeyed on cattles<br />\
    <img src="styles/legend/StudyArea_PointVillages3Projected_1_58.png" /> Leopad eats cattles<br />\
    <img src="styles/legend/StudyArea_PointVillages3Projected_1_59.png" /> Leopads eats cattles<br />\
    <img src="styles/legend/StudyArea_PointVillages3Projected_1_60.png" /> Leopads preyed on cattles<br />\
    <img src="styles/legend/StudyArea_PointVillages3Projected_1_61.png" /> Lion killed person<br />\
    <img src="styles/legend/StudyArea_PointVillages3Projected_1_62.png" /> Lion killed villager<br />\
    <img src="styles/legend/StudyArea_PointVillages3Projected_1_63.png" /> Lion Killed villager<br />\
    <img src="styles/legend/StudyArea_PointVillages3Projected_1_64.png" /> Lion were killed<br />\
    <img src="styles/legend/StudyArea_PointVillages3Projected_1_65.png" /> Lions  preys on cattle<br />\
    <img src="styles/legend/StudyArea_PointVillages3Projected_1_66.png" /> Lions eats cattles<br />\
    <img src="styles/legend/StudyArea_PointVillages3Projected_1_67.png" /> Lions killed villager<br />\
    <img src="styles/legend/StudyArea_PointVillages3Projected_1_68.png" /> Lions prayed on cattles<br />\
    <img src="styles/legend/StudyArea_PointVillages3Projected_1_69.png" /> Lions prey on cattles<br />\
    <img src="styles/legend/StudyArea_PointVillages3Projected_1_70.png" /> Lions preyed on cattles<br />\
    <img src="styles/legend/StudyArea_PointVillages3Projected_1_71.png" /> Lions preys on cattle<br />\
    <img src="styles/legend/StudyArea_PointVillages3Projected_1_72.png" /> Lions preys on cattles<br />\
    <img src="styles/legend/StudyArea_PointVillages3Projected_1_73.png" /> Livestock were killed<br />\
    <img src="styles/legend/StudyArea_PointVillages3Projected_1_74.png" /> Livestocks were Killed<br />\
    <img src="styles/legend/StudyArea_PointVillages3Projected_1_75.png" /> Livestok were killed<br />\
    <img src="styles/legend/StudyArea_PointVillages3Projected_1_76.png" /> Maize farm were destroyed<br />\
    <img src="styles/legend/StudyArea_PointVillages3Projected_1_77.png" /> Monkey damaged crops<br />\
    <img src="styles/legend/StudyArea_PointVillages3Projected_1_78.png" /> Monkey easts crops<br />\
    <img src="styles/legend/StudyArea_PointVillages3Projected_1_79.png" /> Warthog destroyed crops<br />\
    <img src="styles/legend/StudyArea_PointVillages3Projected_1_80.png" /> Wild animals damaged crops<br />\
    <img src="styles/legend/StudyArea_PointVillages3Projected_1_81.png" /> Wild aninals damaged crops<br />\
    <img src="styles/legend/StudyArea_PointVillages3Projected_1_82.png" /> Wild boar damaged crops<br />\
    <img src="styles/legend/StudyArea_PointVillages3Projected_1_83.png" /> Wild boar destroyed crops<br />\
    <img src="styles/legend/StudyArea_PointVillages3Projected_1_84.png" /> <br />' });

lyr_EsriStreet_0.setVisible(true);lyr_StudyArea_PointVillages3Projected_1.setVisible(true);
var layersList = [lyr_EsriStreet_0,lyr_StudyArea_PointVillages3Projected_1];
lyr_StudyArea_PointVillages3Projected_1.set('fieldAliases', {'Join_Count': 'Join_Count', 'TARGET_FID': 'TARGET_FID', 'JOIN_FID': 'JOIN_FID', 'X': 'X', 'Y': 'Y', 'Type_of_Co': 'Type_of_Co', 'Joint_Code': 'Joint_Code', 'Date': 'Date', 'Year': 'Year', 'M_Kiti_Kij': 'M_Kiti_Kij', 'TAREHE': 'TAREHE', 'OBJECTID': 'OBJECTID', 'Region_Cod': 'Region_Cod', 'Region_Nam': 'Region_Nam', 'District_C': 'District_C', 'District_N': 'District_N', 'Ward_Code': 'Ward_Code', 'Ward_Name': 'Ward_Name', 'Vil_Mtaa_N': 'Vil_Mtaa_N', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'Village_Co': 'Village_Co', 'Pop_densit': 'Pop_densit', 'Rinfall': 'Rinfall', 'Rainfall': 'Rainfall', 'Temperatur': 'Temperatur', 'Popl_Denst': 'Popl_Denst', 'Recla24AG': 'Recla24AG', 'RoadS': 'RoadS', 'SerengetiB': 'SerengetiB', 'Settlement': 'Settlement', 'Riverwater': 'Riverwater', 'LULC': 'LULC', 'ReclLULC': 'ReclLULC', });
lyr_StudyArea_PointVillages3Projected_1.set('fieldImages', {'Join_Count': 'TextEdit', 'TARGET_FID': 'TextEdit', 'JOIN_FID': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'Type_of_Co': 'TextEdit', 'Joint_Code': 'TextEdit', 'Date': 'TextEdit', 'Year': 'TextEdit', 'M_Kiti_Kij': 'TextEdit', 'TAREHE': 'TextEdit', 'OBJECTID': 'TextEdit', 'Region_Cod': 'TextEdit', 'Region_Nam': 'TextEdit', 'District_C': 'TextEdit', 'District_N': 'TextEdit', 'Ward_Code': 'TextEdit', 'Ward_Name': 'TextEdit', 'Vil_Mtaa_N': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'Village_Co': 'TextEdit', 'Pop_densit': 'TextEdit', 'Rinfall': 'TextEdit', 'Rainfall': 'TextEdit', 'Temperatur': 'TextEdit', 'Popl_Denst': 'TextEdit', 'Recla24AG': 'TextEdit', 'RoadS': 'TextEdit', 'SerengetiB': 'TextEdit', 'Settlement': 'TextEdit', 'Riverwater': 'TextEdit', 'LULC': 'TextEdit', 'ReclLULC': 'TextEdit', });
lyr_StudyArea_PointVillages3Projected_1.set('fieldLabels', {'Join_Count': 'no label', 'TARGET_FID': 'no label', 'JOIN_FID': 'no label', 'X': 'no label', 'Y': 'no label', 'Type_of_Co': 'header label - visible with data', 'Joint_Code': 'no label', 'Date': 'no label', 'Year': 'header label - visible with data', 'M_Kiti_Kij': 'no label', 'TAREHE': 'no label', 'OBJECTID': 'no label', 'Region_Cod': 'no label', 'Region_Nam': 'header label - visible with data', 'District_C': 'no label', 'District_N': 'header label - visible with data', 'Ward_Code': 'no label', 'Ward_Name': 'header label - visible with data', 'Vil_Mtaa_N': 'header label - visible with data', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'Village_Co': 'no label', 'Pop_densit': 'no label', 'Rinfall': 'no label', 'Rainfall': 'no label', 'Temperatur': 'no label', 'Popl_Denst': 'no label', 'Recla24AG': 'no label', 'RoadS': 'no label', 'SerengetiB': 'no label', 'Settlement': 'no label', 'Riverwater': 'no label', 'LULC': 'no label', 'ReclLULC': 'no label', });
lyr_StudyArea_PointVillages3Projected_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});