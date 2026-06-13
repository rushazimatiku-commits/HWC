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
                interactive: false,
                title: '<img src="styles/legend/StudyArea_PointVillages3Projected_1.png" /> StudyArea_Point&Villages3-Projected'
            });

lyr_EsriStreet_0.setVisible(true);lyr_StudyArea_PointVillages3Projected_1.setVisible(true);
var layersList = [lyr_EsriStreet_0,lyr_StudyArea_PointVillages3Projected_1];
lyr_StudyArea_PointVillages3Projected_1.set('fieldAliases', {'Join_Count': 'Join_Count', 'TARGET_FID': 'TARGET_FID', 'JOIN_FID': 'JOIN_FID', 'X': 'X', 'Y': 'Y', 'Type_of_Co': 'Type_of_Co', 'Joint_Code': 'Joint_Code', 'Date': 'Date', 'Year': 'Year', 'M_Kiti_Kij': 'M_Kiti_Kij', 'TAREHE': 'TAREHE', 'OBJECTID': 'OBJECTID', 'Region_Cod': 'Region_Cod', 'Region_Nam': 'Region_Nam', 'District_C': 'District_C', 'District_N': 'District_N', 'Ward_Code': 'Ward_Code', 'Ward_Name': 'Ward_Name', 'Vil_Mtaa_N': 'Vil_Mtaa_N', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'Village_Co': 'Village_Co', 'Pop_densit': 'Pop_densit', 'Rinfall': 'Rinfall', 'Rainfall': 'Rainfall', 'Temperatur': 'Temperatur', 'Popl_Denst': 'Popl_Denst', 'Recla24AG': 'Recla24AG', 'RoadS': 'RoadS', 'SerengetiB': 'SerengetiB', 'Settlement': 'Settlement', 'Riverwater': 'Riverwater', 'LULC': 'LULC', 'ReclLULC': 'ReclLULC', });
lyr_StudyArea_PointVillages3Projected_1.set('fieldImages', {'Join_Count': 'TextEdit', 'TARGET_FID': 'TextEdit', 'JOIN_FID': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'Type_of_Co': 'TextEdit', 'Joint_Code': 'TextEdit', 'Date': 'TextEdit', 'Year': 'TextEdit', 'M_Kiti_Kij': 'TextEdit', 'TAREHE': 'TextEdit', 'OBJECTID': 'TextEdit', 'Region_Cod': 'TextEdit', 'Region_Nam': 'TextEdit', 'District_C': 'TextEdit', 'District_N': 'TextEdit', 'Ward_Code': 'TextEdit', 'Ward_Name': 'TextEdit', 'Vil_Mtaa_N': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'Village_Co': 'TextEdit', 'Pop_densit': 'TextEdit', 'Rinfall': 'TextEdit', 'Rainfall': 'TextEdit', 'Temperatur': 'TextEdit', 'Popl_Denst': 'TextEdit', 'Recla24AG': 'TextEdit', 'RoadS': 'TextEdit', 'SerengetiB': 'TextEdit', 'Settlement': 'TextEdit', 'Riverwater': 'TextEdit', 'LULC': 'TextEdit', 'ReclLULC': 'TextEdit', });
lyr_StudyArea_PointVillages3Projected_1.set('fieldLabels', {'Join_Count': 'no label', 'TARGET_FID': 'no label', 'JOIN_FID': 'no label', 'X': 'no label', 'Y': 'no label', 'Type_of_Co': 'header label - visible with data', 'Joint_Code': 'no label', 'Date': 'no label', 'Year': 'header label - visible with data', 'M_Kiti_Kij': 'no label', 'TAREHE': 'no label', 'OBJECTID': 'no label', 'Region_Cod': 'no label', 'Region_Nam': 'header label - visible with data', 'District_C': 'no label', 'District_N': 'header label - visible with data', 'Ward_Code': 'no label', 'Ward_Name': 'header label - visible with data', 'Vil_Mtaa_N': 'header label - visible with data', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'Village_Co': 'no label', 'Pop_densit': 'no label', 'Rinfall': 'no label', 'Rainfall': 'no label', 'Temperatur': 'no label', 'Popl_Denst': 'no label', 'Recla24AG': 'no label', 'RoadS': 'no label', 'SerengetiB': 'no label', 'Settlement': 'no label', 'Riverwater': 'no label', 'LULC': 'no label', 'ReclLULC': 'no label', });
lyr_StudyArea_PointVillages3Projected_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});