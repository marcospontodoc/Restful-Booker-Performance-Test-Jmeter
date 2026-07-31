/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
$(document).ready(function() {

    $(".click-title").mouseenter( function(    e){
        e.preventDefault();
        this.style.cursor="pointer";
    });
    $(".click-title").mousedown( function(event){
        event.preventDefault();
    });

    // Ugly code while this script is shared among several pages
    try{
        refreshHitsPerSecond(true);
    } catch(e){}
    try{
        refreshResponseTimeOverTime(true);
    } catch(e){}
    try{
        refreshResponseTimePercentiles();
    } catch(e){}
});


var responseTimePercentilesInfos = {
        data: {"result": {"minY": 114.0, "minX": 0.0, "maxY": 12120.0, "series": [{"data": [[0.0, 114.0], [0.1, 115.0], [0.2, 115.0], [0.3, 115.0], [0.4, 115.0], [0.5, 115.0], [0.6, 115.0], [0.7, 116.0], [0.8, 116.0], [0.9, 116.0], [1.0, 116.0], [1.1, 116.0], [1.2, 116.0], [1.3, 116.0], [1.4, 116.0], [1.5, 116.0], [1.6, 116.0], [1.7, 116.0], [1.8, 116.0], [1.9, 116.0], [2.0, 116.0], [2.1, 116.0], [2.2, 116.0], [2.3, 116.0], [2.4, 116.0], [2.5, 116.0], [2.6, 116.0], [2.7, 116.0], [2.8, 116.0], [2.9, 116.0], [3.0, 116.0], [3.1, 116.0], [3.2, 116.0], [3.3, 116.0], [3.4, 116.0], [3.5, 116.0], [3.6, 116.0], [3.7, 116.0], [3.8, 116.0], [3.9, 116.0], [4.0, 116.0], [4.1, 116.0], [4.2, 116.0], [4.3, 116.0], [4.4, 116.0], [4.5, 116.0], [4.6, 116.0], [4.7, 116.0], [4.8, 116.0], [4.9, 116.0], [5.0, 116.0], [5.1, 116.0], [5.2, 116.0], [5.3, 116.0], [5.4, 116.0], [5.5, 116.0], [5.6, 116.0], [5.7, 116.0], [5.8, 116.0], [5.9, 116.0], [6.0, 116.0], [6.1, 116.0], [6.2, 116.0], [6.3, 116.0], [6.4, 116.0], [6.5, 116.0], [6.6, 116.0], [6.7, 116.0], [6.8, 116.0], [6.9, 116.0], [7.0, 116.0], [7.1, 116.0], [7.2, 116.0], [7.3, 116.0], [7.4, 116.0], [7.5, 116.0], [7.6, 116.0], [7.7, 116.0], [7.8, 116.0], [7.9, 116.0], [8.0, 116.0], [8.1, 116.0], [8.2, 116.0], [8.3, 116.0], [8.4, 116.0], [8.5, 116.0], [8.6, 116.0], [8.7, 116.0], [8.8, 116.0], [8.9, 116.0], [9.0, 116.0], [9.1, 116.0], [9.2, 116.0], [9.3, 116.0], [9.4, 116.0], [9.5, 116.0], [9.6, 116.0], [9.7, 117.0], [9.8, 117.0], [9.9, 117.0], [10.0, 117.0], [10.1, 117.0], [10.2, 117.0], [10.3, 117.0], [10.4, 117.0], [10.5, 117.0], [10.6, 117.0], [10.7, 117.0], [10.8, 117.0], [10.9, 117.0], [11.0, 117.0], [11.1, 117.0], [11.2, 117.0], [11.3, 117.0], [11.4, 117.0], [11.5, 117.0], [11.6, 117.0], [11.7, 117.0], [11.8, 117.0], [11.9, 117.0], [12.0, 117.0], [12.1, 117.0], [12.2, 117.0], [12.3, 117.0], [12.4, 117.0], [12.5, 117.0], [12.6, 117.0], [12.7, 117.0], [12.8, 117.0], [12.9, 117.0], [13.0, 117.0], [13.1, 117.0], [13.2, 117.0], [13.3, 117.0], [13.4, 117.0], [13.5, 117.0], [13.6, 117.0], [13.7, 117.0], [13.8, 117.0], [13.9, 117.0], [14.0, 117.0], [14.1, 117.0], [14.2, 117.0], [14.3, 117.0], [14.4, 117.0], [14.5, 117.0], [14.6, 117.0], [14.7, 117.0], [14.8, 117.0], [14.9, 117.0], [15.0, 117.0], [15.1, 117.0], [15.2, 117.0], [15.3, 117.0], [15.4, 117.0], [15.5, 117.0], [15.6, 117.0], [15.7, 117.0], [15.8, 117.0], [15.9, 117.0], [16.0, 117.0], [16.1, 117.0], [16.2, 117.0], [16.3, 117.0], [16.4, 117.0], [16.5, 117.0], [16.6, 117.0], [16.7, 117.0], [16.8, 117.0], [16.9, 117.0], [17.0, 117.0], [17.1, 117.0], [17.2, 117.0], [17.3, 117.0], [17.4, 117.0], [17.5, 117.0], [17.6, 117.0], [17.7, 117.0], [17.8, 117.0], [17.9, 117.0], [18.0, 117.0], [18.1, 117.0], [18.2, 117.0], [18.3, 117.0], [18.4, 117.0], [18.5, 117.0], [18.6, 117.0], [18.7, 117.0], [18.8, 117.0], [18.9, 117.0], [19.0, 117.0], [19.1, 117.0], [19.2, 117.0], [19.3, 117.0], [19.4, 117.0], [19.5, 117.0], [19.6, 117.0], [19.7, 117.0], [19.8, 117.0], [19.9, 117.0], [20.0, 117.0], [20.1, 117.0], [20.2, 117.0], [20.3, 117.0], [20.4, 117.0], [20.5, 117.0], [20.6, 117.0], [20.7, 117.0], [20.8, 117.0], [20.9, 117.0], [21.0, 117.0], [21.1, 117.0], [21.2, 117.0], [21.3, 117.0], [21.4, 117.0], [21.5, 117.0], [21.6, 117.0], [21.7, 117.0], [21.8, 117.0], [21.9, 117.0], [22.0, 117.0], [22.1, 117.0], [22.2, 117.0], [22.3, 117.0], [22.4, 117.0], [22.5, 117.0], [22.6, 117.0], [22.7, 117.0], [22.8, 117.0], [22.9, 117.0], [23.0, 117.0], [23.1, 117.0], [23.2, 117.0], [23.3, 117.0], [23.4, 117.0], [23.5, 117.0], [23.6, 117.0], [23.7, 117.0], [23.8, 117.0], [23.9, 117.0], [24.0, 117.0], [24.1, 117.0], [24.2, 117.0], [24.3, 117.0], [24.4, 117.0], [24.5, 117.0], [24.6, 117.0], [24.7, 117.0], [24.8, 117.0], [24.9, 117.0], [25.0, 117.0], [25.1, 117.0], [25.2, 117.0], [25.3, 117.0], [25.4, 117.0], [25.5, 117.0], [25.6, 117.0], [25.7, 117.0], [25.8, 117.0], [25.9, 117.0], [26.0, 117.0], [26.1, 117.0], [26.2, 117.0], [26.3, 117.0], [26.4, 117.0], [26.5, 117.0], [26.6, 117.0], [26.7, 117.0], [26.8, 117.0], [26.9, 117.0], [27.0, 117.0], [27.1, 117.0], [27.2, 117.0], [27.3, 117.0], [27.4, 117.0], [27.5, 117.0], [27.6, 117.0], [27.7, 117.0], [27.8, 117.0], [27.9, 117.0], [28.0, 117.0], [28.1, 117.0], [28.2, 117.0], [28.3, 117.0], [28.4, 117.0], [28.5, 117.0], [28.6, 117.0], [28.7, 117.0], [28.8, 117.0], [28.9, 117.0], [29.0, 117.0], [29.1, 117.0], [29.2, 117.0], [29.3, 117.0], [29.4, 117.0], [29.5, 117.0], [29.6, 117.0], [29.7, 117.0], [29.8, 117.0], [29.9, 117.0], [30.0, 117.0], [30.1, 117.0], [30.2, 117.0], [30.3, 117.0], [30.4, 117.0], [30.5, 117.0], [30.6, 117.0], [30.7, 117.0], [30.8, 117.0], [30.9, 117.0], [31.0, 117.0], [31.1, 117.0], [31.2, 117.0], [31.3, 117.0], [31.4, 117.0], [31.5, 117.0], [31.6, 117.0], [31.7, 117.0], [31.8, 117.0], [31.9, 117.0], [32.0, 117.0], [32.1, 117.0], [32.2, 117.0], [32.3, 117.0], [32.4, 117.0], [32.5, 117.0], [32.6, 117.0], [32.7, 117.0], [32.8, 117.0], [32.9, 117.0], [33.0, 117.0], [33.1, 117.0], [33.2, 117.0], [33.3, 117.0], [33.4, 117.0], [33.5, 117.0], [33.6, 117.0], [33.7, 117.0], [33.8, 117.0], [33.9, 117.0], [34.0, 117.0], [34.1, 117.0], [34.2, 117.0], [34.3, 117.0], [34.4, 117.0], [34.5, 117.0], [34.6, 117.0], [34.7, 117.0], [34.8, 117.0], [34.9, 117.0], [35.0, 118.0], [35.1, 118.0], [35.2, 118.0], [35.3, 118.0], [35.4, 118.0], [35.5, 118.0], [35.6, 118.0], [35.7, 118.0], [35.8, 118.0], [35.9, 118.0], [36.0, 118.0], [36.1, 118.0], [36.2, 118.0], [36.3, 118.0], [36.4, 118.0], [36.5, 118.0], [36.6, 118.0], [36.7, 118.0], [36.8, 118.0], [36.9, 118.0], [37.0, 118.0], [37.1, 118.0], [37.2, 118.0], [37.3, 118.0], [37.4, 118.0], [37.5, 118.0], [37.6, 118.0], [37.7, 118.0], [37.8, 118.0], [37.9, 118.0], [38.0, 118.0], [38.1, 118.0], [38.2, 118.0], [38.3, 118.0], [38.4, 118.0], [38.5, 118.0], [38.6, 118.0], [38.7, 118.0], [38.8, 118.0], [38.9, 118.0], [39.0, 118.0], [39.1, 118.0], [39.2, 118.0], [39.3, 118.0], [39.4, 118.0], [39.5, 118.0], [39.6, 118.0], [39.7, 118.0], [39.8, 118.0], [39.9, 118.0], [40.0, 118.0], [40.1, 118.0], [40.2, 118.0], [40.3, 118.0], [40.4, 118.0], [40.5, 118.0], [40.6, 118.0], [40.7, 118.0], [40.8, 118.0], [40.9, 118.0], [41.0, 118.0], [41.1, 118.0], [41.2, 118.0], [41.3, 118.0], [41.4, 118.0], [41.5, 118.0], [41.6, 118.0], [41.7, 118.0], [41.8, 118.0], [41.9, 118.0], [42.0, 118.0], [42.1, 118.0], [42.2, 118.0], [42.3, 118.0], [42.4, 118.0], [42.5, 118.0], [42.6, 118.0], [42.7, 118.0], [42.8, 118.0], [42.9, 118.0], [43.0, 118.0], [43.1, 118.0], [43.2, 118.0], [43.3, 118.0], [43.4, 118.0], [43.5, 118.0], [43.6, 118.0], [43.7, 118.0], [43.8, 118.0], [43.9, 118.0], [44.0, 118.0], [44.1, 118.0], [44.2, 118.0], [44.3, 118.0], [44.4, 118.0], [44.5, 118.0], [44.6, 118.0], [44.7, 118.0], [44.8, 118.0], [44.9, 118.0], [45.0, 118.0], [45.1, 118.0], [45.2, 118.0], [45.3, 118.0], [45.4, 118.0], [45.5, 118.0], [45.6, 118.0], [45.7, 118.0], [45.8, 118.0], [45.9, 118.0], [46.0, 118.0], [46.1, 118.0], [46.2, 118.0], [46.3, 118.0], [46.4, 118.0], [46.5, 118.0], [46.6, 118.0], [46.7, 118.0], [46.8, 118.0], [46.9, 118.0], [47.0, 118.0], [47.1, 118.0], [47.2, 118.0], [47.3, 118.0], [47.4, 118.0], [47.5, 118.0], [47.6, 118.0], [47.7, 118.0], [47.8, 118.0], [47.9, 118.0], [48.0, 118.0], [48.1, 118.0], [48.2, 118.0], [48.3, 118.0], [48.4, 118.0], [48.5, 118.0], [48.6, 118.0], [48.7, 118.0], [48.8, 118.0], [48.9, 118.0], [49.0, 118.0], [49.1, 118.0], [49.2, 118.0], [49.3, 118.0], [49.4, 118.0], [49.5, 118.0], [49.6, 118.0], [49.7, 118.0], [49.8, 118.0], [49.9, 118.0], [50.0, 118.0], [50.1, 118.0], [50.2, 118.0], [50.3, 118.0], [50.4, 118.0], [50.5, 118.0], [50.6, 118.0], [50.7, 118.0], [50.8, 118.0], [50.9, 118.0], [51.0, 118.0], [51.1, 118.0], [51.2, 118.0], [51.3, 118.0], [51.4, 118.0], [51.5, 118.0], [51.6, 118.0], [51.7, 118.0], [51.8, 118.0], [51.9, 118.0], [52.0, 118.0], [52.1, 118.0], [52.2, 118.0], [52.3, 118.0], [52.4, 118.0], [52.5, 118.0], [52.6, 118.0], [52.7, 118.0], [52.8, 118.0], [52.9, 118.0], [53.0, 118.0], [53.1, 118.0], [53.2, 118.0], [53.3, 118.0], [53.4, 118.0], [53.5, 118.0], [53.6, 118.0], [53.7, 118.0], [53.8, 118.0], [53.9, 118.0], [54.0, 118.0], [54.1, 118.0], [54.2, 118.0], [54.3, 118.0], [54.4, 118.0], [54.5, 118.0], [54.6, 118.0], [54.7, 118.0], [54.8, 118.0], [54.9, 118.0], [55.0, 118.0], [55.1, 118.0], [55.2, 118.0], [55.3, 118.0], [55.4, 118.0], [55.5, 118.0], [55.6, 118.0], [55.7, 118.0], [55.8, 118.0], [55.9, 118.0], [56.0, 118.0], [56.1, 118.0], [56.2, 118.0], [56.3, 118.0], [56.4, 118.0], [56.5, 118.0], [56.6, 118.0], [56.7, 118.0], [56.8, 118.0], [56.9, 118.0], [57.0, 118.0], [57.1, 118.0], [57.2, 118.0], [57.3, 118.0], [57.4, 118.0], [57.5, 118.0], [57.6, 118.0], [57.7, 118.0], [57.8, 118.0], [57.9, 118.0], [58.0, 118.0], [58.1, 118.0], [58.2, 118.0], [58.3, 118.0], [58.4, 118.0], [58.5, 118.0], [58.6, 118.0], [58.7, 118.0], [58.8, 118.0], [58.9, 118.0], [59.0, 118.0], [59.1, 118.0], [59.2, 118.0], [59.3, 118.0], [59.4, 118.0], [59.5, 118.0], [59.6, 118.0], [59.7, 118.0], [59.8, 118.0], [59.9, 118.0], [60.0, 118.0], [60.1, 118.0], [60.2, 118.0], [60.3, 118.0], [60.4, 118.0], [60.5, 118.0], [60.6, 118.0], [60.7, 118.0], [60.8, 118.0], [60.9, 118.0], [61.0, 118.0], [61.1, 118.0], [61.2, 118.0], [61.3, 118.0], [61.4, 118.0], [61.5, 118.0], [61.6, 118.0], [61.7, 118.0], [61.8, 118.0], [61.9, 118.0], [62.0, 118.0], [62.1, 118.0], [62.2, 118.0], [62.3, 118.0], [62.4, 118.0], [62.5, 118.0], [62.6, 118.0], [62.7, 118.0], [62.8, 118.0], [62.9, 118.0], [63.0, 118.0], [63.1, 118.0], [63.2, 118.0], [63.3, 118.0], [63.4, 118.0], [63.5, 118.0], [63.6, 118.0], [63.7, 118.0], [63.8, 118.0], [63.9, 118.0], [64.0, 118.0], [64.1, 118.0], [64.2, 118.0], [64.3, 118.0], [64.4, 118.0], [64.5, 118.0], [64.6, 119.0], [64.7, 119.0], [64.8, 119.0], [64.9, 119.0], [65.0, 119.0], [65.1, 119.0], [65.2, 119.0], [65.3, 119.0], [65.4, 119.0], [65.5, 119.0], [65.6, 119.0], [65.7, 119.0], [65.8, 119.0], [65.9, 119.0], [66.0, 119.0], [66.1, 119.0], [66.2, 119.0], [66.3, 119.0], [66.4, 119.0], [66.5, 119.0], [66.6, 119.0], [66.7, 119.0], [66.8, 119.0], [66.9, 119.0], [67.0, 119.0], [67.1, 119.0], [67.2, 119.0], [67.3, 119.0], [67.4, 119.0], [67.5, 119.0], [67.6, 119.0], [67.7, 119.0], [67.8, 119.0], [67.9, 119.0], [68.0, 119.0], [68.1, 119.0], [68.2, 119.0], [68.3, 119.0], [68.4, 119.0], [68.5, 119.0], [68.6, 119.0], [68.7, 119.0], [68.8, 119.0], [68.9, 119.0], [69.0, 119.0], [69.1, 119.0], [69.2, 119.0], [69.3, 119.0], [69.4, 119.0], [69.5, 119.0], [69.6, 119.0], [69.7, 119.0], [69.8, 119.0], [69.9, 119.0], [70.0, 119.0], [70.1, 119.0], [70.2, 119.0], [70.3, 119.0], [70.4, 119.0], [70.5, 119.0], [70.6, 119.0], [70.7, 119.0], [70.8, 119.0], [70.9, 119.0], [71.0, 119.0], [71.1, 119.0], [71.2, 119.0], [71.3, 119.0], [71.4, 119.0], [71.5, 119.0], [71.6, 119.0], [71.7, 119.0], [71.8, 119.0], [71.9, 119.0], [72.0, 119.0], [72.1, 119.0], [72.2, 119.0], [72.3, 119.0], [72.4, 119.0], [72.5, 119.0], [72.6, 119.0], [72.7, 119.0], [72.8, 119.0], [72.9, 119.0], [73.0, 119.0], [73.1, 119.0], [73.2, 119.0], [73.3, 119.0], [73.4, 119.0], [73.5, 119.0], [73.6, 119.0], [73.7, 119.0], [73.8, 119.0], [73.9, 119.0], [74.0, 119.0], [74.1, 119.0], [74.2, 119.0], [74.3, 119.0], [74.4, 119.0], [74.5, 119.0], [74.6, 119.0], [74.7, 119.0], [74.8, 119.0], [74.9, 119.0], [75.0, 119.0], [75.1, 119.0], [75.2, 119.0], [75.3, 119.0], [75.4, 119.0], [75.5, 119.0], [75.6, 119.0], [75.7, 119.0], [75.8, 119.0], [75.9, 119.0], [76.0, 119.0], [76.1, 119.0], [76.2, 119.0], [76.3, 119.0], [76.4, 119.0], [76.5, 119.0], [76.6, 119.0], [76.7, 119.0], [76.8, 119.0], [76.9, 119.0], [77.0, 119.0], [77.1, 119.0], [77.2, 119.0], [77.3, 119.0], [77.4, 119.0], [77.5, 119.0], [77.6, 119.0], [77.7, 119.0], [77.8, 119.0], [77.9, 119.0], [78.0, 119.0], [78.1, 119.0], [78.2, 119.0], [78.3, 119.0], [78.4, 119.0], [78.5, 119.0], [78.6, 119.0], [78.7, 119.0], [78.8, 119.0], [78.9, 119.0], [79.0, 119.0], [79.1, 119.0], [79.2, 119.0], [79.3, 119.0], [79.4, 119.0], [79.5, 119.0], [79.6, 119.0], [79.7, 119.0], [79.8, 119.0], [79.9, 119.0], [80.0, 119.0], [80.1, 119.0], [80.2, 119.0], [80.3, 119.0], [80.4, 119.0], [80.5, 119.0], [80.6, 119.0], [80.7, 119.0], [80.8, 119.0], [80.9, 119.0], [81.0, 119.0], [81.1, 119.0], [81.2, 119.0], [81.3, 119.0], [81.4, 120.0], [81.5, 120.0], [81.6, 120.0], [81.7, 120.0], [81.8, 120.0], [81.9, 120.0], [82.0, 120.0], [82.1, 120.0], [82.2, 120.0], [82.3, 120.0], [82.4, 120.0], [82.5, 120.0], [82.6, 120.0], [82.7, 120.0], [82.8, 120.0], [82.9, 120.0], [83.0, 120.0], [83.1, 120.0], [83.2, 120.0], [83.3, 120.0], [83.4, 120.0], [83.5, 120.0], [83.6, 120.0], [83.7, 120.0], [83.8, 120.0], [83.9, 120.0], [84.0, 120.0], [84.1, 120.0], [84.2, 120.0], [84.3, 120.0], [84.4, 120.0], [84.5, 120.0], [84.6, 120.0], [84.7, 120.0], [84.8, 120.0], [84.9, 120.0], [85.0, 120.0], [85.1, 120.0], [85.2, 120.0], [85.3, 120.0], [85.4, 120.0], [85.5, 120.0], [85.6, 120.0], [85.7, 120.0], [85.8, 120.0], [85.9, 120.0], [86.0, 120.0], [86.1, 120.0], [86.2, 120.0], [86.3, 120.0], [86.4, 120.0], [86.5, 120.0], [86.6, 120.0], [86.7, 120.0], [86.8, 120.0], [86.9, 120.0], [87.0, 120.0], [87.1, 120.0], [87.2, 120.0], [87.3, 120.0], [87.4, 120.0], [87.5, 120.0], [87.6, 120.0], [87.7, 120.0], [87.8, 120.0], [87.9, 120.0], [88.0, 120.0], [88.1, 121.0], [88.2, 121.0], [88.3, 121.0], [88.4, 121.0], [88.5, 121.0], [88.6, 121.0], [88.7, 121.0], [88.8, 121.0], [88.9, 121.0], [89.0, 121.0], [89.1, 121.0], [89.2, 121.0], [89.3, 121.0], [89.4, 121.0], [89.5, 121.0], [89.6, 121.0], [89.7, 121.0], [89.8, 121.0], [89.9, 121.0], [90.0, 121.0], [90.1, 121.0], [90.2, 121.0], [90.3, 121.0], [90.4, 121.0], [90.5, 121.0], [90.6, 121.0], [90.7, 121.0], [90.8, 121.0], [90.9, 121.0], [91.0, 121.0], [91.1, 121.0], [91.2, 121.0], [91.3, 122.0], [91.4, 122.0], [91.5, 122.0], [91.6, 122.0], [91.7, 122.0], [91.8, 122.0], [91.9, 122.0], [92.0, 122.0], [92.1, 122.0], [92.2, 122.0], [92.3, 122.0], [92.4, 122.0], [92.5, 122.0], [92.6, 122.0], [92.7, 122.0], [92.8, 122.0], [92.9, 122.0], [93.0, 122.0], [93.1, 122.0], [93.2, 122.0], [93.3, 123.0], [93.4, 123.0], [93.5, 123.0], [93.6, 123.0], [93.7, 123.0], [93.8, 123.0], [93.9, 123.0], [94.0, 123.0], [94.1, 123.0], [94.2, 123.0], [94.3, 123.0], [94.4, 123.0], [94.5, 123.0], [94.6, 124.0], [94.7, 124.0], [94.8, 124.0], [94.9, 124.0], [95.0, 124.0], [95.1, 124.0], [95.2, 124.0], [95.3, 124.0], [95.4, 124.0], [95.5, 124.0], [95.6, 125.0], [95.7, 125.0], [95.8, 125.0], [95.9, 125.0], [96.0, 125.0], [96.1, 125.0], [96.2, 126.0], [96.3, 126.0], [96.4, 126.0], [96.5, 126.0], [96.6, 126.0], [96.7, 127.0], [96.8, 127.0], [96.9, 127.0], [97.0, 127.0], [97.1, 128.0], [97.2, 128.0], [97.3, 128.0], [97.4, 129.0], [97.5, 129.0], [97.6, 130.0], [97.7, 130.0], [97.8, 131.0], [97.9, 131.0], [98.0, 132.0], [98.1, 133.0], [98.2, 133.0], [98.3, 135.0], [98.4, 138.0], [98.5, 140.0], [98.6, 142.0], [98.7, 144.0], [98.8, 145.0], [98.9, 146.0], [99.0, 147.0], [99.1, 148.0], [99.2, 150.0], [99.3, 153.0], [99.4, 166.0], [99.5, 349.0], [99.6, 356.0], [99.7, 436.0], [99.8, 456.0], [99.9, 472.0], [100.0, 12120.0]], "isOverall": false, "label": "POST - AUTH", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
        getOptions: function() {
            return {
                series: {
                    points: { show: false }
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentiles'
                },
                xaxis: {
                    tickDecimals: 1,
                    axisLabel: "Percentiles",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Percentile value in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : %x.2 percentile was %y ms"
                },
                selection: { mode: "xy" },
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentiles"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesPercentiles"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesPercentiles"), dataset, prepareOverviewOptions(options));
        }
};

/**
 * @param elementId Id of element where we display message
 */
function setEmptyGraph(elementId) {
    $(function() {
        $(elementId).text("No graph series with filter="+seriesFilter);
    });
}

// Response times percentiles
function refreshResponseTimePercentiles() {
    var infos = responseTimePercentilesInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimePercentiles");
        return;
    }
    if (isGraph($("#flotResponseTimesPercentiles"))){
        infos.createGraph();
    } else {
        var choiceContainer = $("#choicesResponseTimePercentiles");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesPercentiles", "#overviewResponseTimesPercentiles");
        $('#bodyResponseTimePercentiles .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimeDistributionInfos = {
        data: {"result": {"minY": 2.0, "minX": 100.0, "maxY": 111140.0, "series": [{"data": [[300.0, 224.0], [700.0, 3.0], [6100.0, 30.0], [12100.0, 2.0], [100.0, 111140.0], [400.0, 297.0], [200.0, 11.0], [7100.0, 16.0], [500.0, 9.0], [8100.0, 2.0]], "isOverall": false, "label": "POST - AUTH", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 12100.0, "title": "Response Time Distribution"}},
        getOptions: function() {
            var granularity = this.data.result.granularity;
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    barWidth: this.data.result.granularity
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " responses for " + label + " were between " + xval + " and " + (xval + granularity) + " ms";
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimeDistribution"), prepareData(data.result.series, $("#choicesResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshResponseTimeDistribution() {
    var infos = responseTimeDistributionInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeDistribution");
        return;
    }
    if (isGraph($("#flotResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var syntheticResponseTimeDistributionInfos = {
        data: {"result": {"minY": 12.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 111672.0, "series": [{"data": [[0.0, 111672.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 12.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 50.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
        getOptions: function() {
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendSyntheticResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times ranges",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                    tickLength:0,
                    min:-0.5,
                    max:3.5
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    align: "center",
                    barWidth: 0.25,
                    fill:.75
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " " + label;
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            options.xaxis.ticks = data.result.ticks;
            $.plot($("#flotSyntheticResponseTimeDistribution"), prepareData(data.result.series, $("#choicesSyntheticResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshSyntheticResponseTimeDistribution() {
    var infos = syntheticResponseTimeDistributionInfos;
    prepareSeries(infos.data, true);
    if (isGraph($("#flotSyntheticResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerSyntheticResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var activeThreadsOverTimeInfos = {
        data: {"result": {"minY": 5.50627615062762, "minX": 1.78541742E12, "maxY": 50.0, "series": [{"data": [[1.78541754E12, 50.0], [1.78541742E12, 5.50627615062762], [1.78541772E12, 49.94609708025851], [1.7854176E12, 50.0], [1.78541766E12, 50.0], [1.78541748E12, 40.930088946801895]], "isOverall": false, "label": "Login -Teste de Carga 50 usuários", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.78541772E12, "title": "Active Threads Over Time"}},
        getOptions: function() {
            return {
                series: {
                    stack: true,
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 6,
                    show: true,
                    container: '#legendActiveThreadsOverTime'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                selection: {
                    mode: 'xy'
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : At %x there were %y active threads"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesActiveThreadsOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotActiveThreadsOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewActiveThreadsOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Active Threads Over Time
function refreshActiveThreadsOverTime(fixTimestamps) {
    var infos = activeThreadsOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -10800000);
    }
    if(isGraph($("#flotActiveThreadsOverTime"))) {
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesActiveThreadsOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotActiveThreadsOverTime", "#overviewActiveThreadsOverTime");
        $('#footerActiveThreadsOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var timeVsThreadsInfos = {
        data: {"result": {"minY": 118.37922077922074, "minX": 1.0, "maxY": 314.0, "series": [{"data": [[2.0, 145.76923076923075], [3.0, 135.13636363636363], [4.0, 130.0666666666667], [5.0, 127.58974358974359], [6.0, 125.47169811320757], [7.0, 124.42105263157895], [8.0, 124.04918032786883], [9.0, 123.2], [10.0, 122.65384615384613], [11.0, 122.48387096774195], [12.0, 122.56842105263159], [13.0, 121.19827586206897], [14.0, 121.44642857142854], [15.0, 121.03937007874013], [16.0, 121.0390625], [17.0, 119.97959183673474], [18.0, 120.22758620689655], [19.0, 120.94642857142854], [20.0, 120.49367088607589], [21.0, 119.796511627907], [22.0, 120.09677419354837], [23.0, 120.01069518716581], [24.0, 120.05288461538463], [25.0, 120.14427860696519], [26.0, 120.1052631578947], [27.0, 119.07441860465119], [28.0, 119.58299595141699], [29.0, 119.91810344827587], [30.0, 120.1660377358491], [31.0, 119.9797570850203], [32.0, 135.54506437768237], [33.0, 118.88297872340426], [34.0, 119.24149659863946], [35.0, 120.6145833333334], [36.0, 119.18339100346026], [37.0, 118.84097859327214], [38.0, 119.34539473684207], [39.0, 128.36421725239617], [40.0, 119.63939393939398], [41.0, 119.00274725274731], [42.0, 119.15315315315317], [43.0, 119.9159663865546], [44.0, 118.47745358090191], [45.0, 119.47849462365593], [46.0, 119.812030075188], [47.0, 118.37922077922074], [48.0, 118.86650485436897], [49.0, 119.0732323232323], [50.0, 123.44019454371832], [1.0, 314.0]], "isOverall": false, "label": "POST - AUTH", "isController": false}, {"data": [[48.461497843091756, 123.18213793473795]], "isOverall": false, "label": "POST - AUTH-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 50.0, "title": "Time VS Threads"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: { noColumns: 2,show: true, container: '#legendTimeVsThreads' },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s: At %x.2 active threads, Average response time was %y.2 ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesTimeVsThreads"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotTimesVsThreads"), dataset, options);
            // setup overview
            $.plot($("#overviewTimesVsThreads"), dataset, prepareOverviewOptions(options));
        }
};

// Time vs threads
function refreshTimeVsThreads(){
    var infos = timeVsThreadsInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTimeVsThreads");
        return;
    }
    if(isGraph($("#flotTimesVsThreads"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTimeVsThreads");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTimesVsThreads", "#overviewTimesVsThreads");
        $('#footerTimeVsThreads .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var bytesThroughputOverTimeInfos = {
        data : {"result": {"minY": 991.85, "minX": 1.78541742E12, "maxY": 322159.13333333336, "series": [{"data": [[1.78541754E12, 317752.56666666665], [1.78541742E12, 3072.1666666666665], [1.78541772E12, 280104.9], [1.7854176E12, 322159.13333333336], [1.78541766E12, 285834.26666666666], [1.78541748E12, 227020.56666666668]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.78541754E12, 102625.35], [1.78541742E12, 991.85], [1.78541772E12, 90540.55], [1.7854176E12, 103965.8], [1.78541766E12, 92320.9], [1.78541748E12, 73251.65]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.78541772E12, "title": "Bytes Throughput Over Time"}},
        getOptions : function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity) ,
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Bytes / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendBytesThroughputOverTime'
                },
                selection: {
                    mode: "xy"
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y"
                }
            };
        },
        createGraph : function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesBytesThroughputOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotBytesThroughputOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewBytesThroughputOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Bytes throughput Over Time
function refreshBytesThroughputOverTime(fixTimestamps) {
    var infos = bytesThroughputOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -10800000);
    }
    if(isGraph($("#flotBytesThroughputOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesBytesThroughputOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotBytesThroughputOverTime", "#overviewBytesThroughputOverTime");
        $('#footerBytesThroughputOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimesOverTimeInfos = {
        data: {"result": {"minY": 119.71255787961016, "minX": 1.78541742E12, "maxY": 134.61993167310894, "series": [{"data": [[1.78541754E12, 121.1454567511824], [1.78541742E12, 131.33472803347294], [1.78541772E12, 120.52216161708753], [1.7854176E12, 119.71255787961016], [1.78541766E12, 134.61993167310894], [1.78541748E12, 119.72194209959787]], "isOverall": false, "label": "POST - AUTH", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.78541772E12, "title": "Response Time Over Time"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average response time was %y ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Times Over Time
function refreshResponseTimeOverTime(fixTimestamps) {
    var infos = responseTimesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -10800000);
    }
    if(isGraph($("#flotResponseTimesOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesOverTime", "#overviewResponseTimesOverTime");
        $('#footerResponseTimesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var latenciesOverTimeInfos = {
        data: {"result": {"minY": 119.70868593325848, "minX": 1.78541742E12, "maxY": 134.6149869639491, "series": [{"data": [[1.78541754E12, 121.14169598447148], [1.78541742E12, 131.3221757322176], [1.78541772E12, 120.51835724435082], [1.7854176E12, 119.70868593325848], [1.78541766E12, 134.6149869639491], [1.78541748E12, 119.71729647045467]], "isOverall": false, "label": "POST - AUTH", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.78541772E12, "title": "Latencies Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response latencies in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendLatenciesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average latency was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesLatenciesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotLatenciesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewLatenciesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Latencies Over Time
function refreshLatenciesOverTime(fixTimestamps) {
    var infos = latenciesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyLatenciesOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -10800000);
    }
    if(isGraph($("#flotLatenciesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesLatenciesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotLatenciesOverTime", "#overviewLatenciesOverTime");
        $('#footerLatenciesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var connectTimeOverTimeInfos = {
        data: {"result": {"minY": 0.46527936929917635, "minX": 1.78541742E12, "maxY": 12.995815899581599, "series": [{"data": [[1.78541754E12, 0.4856241659589969], [1.78541742E12, 12.995815899581599], [1.78541772E12, 0.46527936929917635], [1.7854176E12, 0.47373463196551013], [1.78541766E12, 0.5273307560909819], [1.78541748E12, 0.9611353464392955]], "isOverall": false, "label": "POST - AUTH", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.78541772E12, "title": "Connect Time Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getConnectTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average Connect Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendConnectTimeOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average connect time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesConnectTimeOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotConnectTimeOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewConnectTimeOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Connect Time Over Time
function refreshConnectTimeOverTime(fixTimestamps) {
    var infos = connectTimeOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyConnectTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -10800000);
    }
    if(isGraph($("#flotConnectTimeOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesConnectTimeOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotConnectTimeOverTime", "#overviewConnectTimeOverTime");
        $('#footerConnectTimeOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var responseTimePercentilesOverTimeInfos = {
        data: {"result": {"minY": 114.0, "minX": 1.78541742E12, "maxY": 12120.0, "series": [{"data": [[1.78541754E12, 533.0], [1.78541742E12, 704.0], [1.78541772E12, 728.0], [1.7854176E12, 728.0], [1.78541766E12, 12120.0], [1.78541748E12, 498.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.78541754E12, 114.0], [1.78541742E12, 115.0], [1.78541772E12, 115.0], [1.7854176E12, 115.0], [1.78541766E12, 115.0], [1.78541748E12, 114.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.78541754E12, 126.0], [1.78541742E12, 120.0], [1.78541772E12, 120.0], [1.7854176E12, 121.0], [1.78541766E12, 121.0], [1.78541748E12, 120.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.78541754E12, 156.0], [1.78541742E12, 483.79999999999995], [1.78541772E12, 140.0], [1.7854176E12, 128.0], [1.78541766E12, 137.9900000000016], [1.78541748E12, 129.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.78541754E12, 118.0], [1.78541742E12, 118.0], [1.78541772E12, 118.0], [1.7854176E12, 118.0], [1.78541766E12, 118.0], [1.78541748E12, 118.0]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.78541754E12, 140.95000000000073], [1.78541742E12, 122.0], [1.78541772E12, 123.0], [1.7854176E12, 123.0], [1.78541766E12, 123.0], [1.78541748E12, 122.0]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.78541772E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Response Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentilesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Response time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentilesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimePercentilesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimePercentilesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Time Percentiles Over Time
function refreshResponseTimePercentilesOverTime(fixTimestamps) {
    var infos = responseTimePercentilesOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -10800000);
    }
    if(isGraph($("#flotResponseTimePercentilesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimePercentilesOverTime", "#overviewResponseTimePercentilesOverTime");
        $('#footerResponseTimePercentilesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var responseTimeVsRequestInfos = {
    data: {"result": {"minY": 117.0, "minX": 8.0, "maxY": 146.0, "series": [{"data": [[8.0, 118.5], [18.0, 118.0], [26.0, 118.0], [35.0, 118.0], [41.0, 119.0], [53.0, 118.0], [58.0, 118.0], [69.0, 118.0], [76.0, 118.0], [87.0, 118.0], [91.0, 118.0], [105.0, 118.0], [108.0, 118.0], [114.0, 120.0], [117.0, 118.0], [131.0, 118.0], [134.0, 118.0], [148.0, 117.0], [149.0, 118.0], [166.0, 118.0], [163.0, 118.0], [177.0, 118.0], [178.0, 119.0], [187.0, 118.0], [194.0, 118.0], [206.0, 118.0], [215.0, 117.0], [220.0, 118.0], [230.0, 117.0], [239.0, 118.0], [233.0, 118.0], [249.0, 119.0], [255.0, 118.0], [251.0, 117.0], [270.0, 118.0], [268.0, 118.0], [299.0, 118.0], [289.0, 118.0], [312.0, 118.0], [308.0, 118.0], [309.0, 118.0], [323.0, 118.0], [327.0, 117.0], [330.0, 126.0], [340.0, 118.0], [348.0, 146.0], [350.0, 126.5], [351.0, 118.0], [343.0, 119.0], [363.0, 118.0], [364.0, 117.0], [362.0, 119.0], [365.0, 118.0], [357.0, 118.0], [377.0, 118.0], [381.0, 118.0], [374.0, 118.0], [398.0, 118.0], [392.0, 118.0], [399.0, 118.0], [389.0, 118.0], [395.0, 118.0], [396.0, 118.0], [387.0, 118.0], [393.0, 118.0], [397.0, 118.0], [391.0, 118.0], [413.0, 118.0], [407.0, 118.0], [410.0, 118.0], [411.0, 118.0], [412.0, 118.0], [403.0, 118.0], [402.0, 118.0], [401.0, 118.0], [415.0, 118.0], [414.0, 118.0], [400.0, 119.0], [406.0, 118.0], [405.0, 118.0], [404.0, 118.0], [408.0, 118.0], [409.0, 118.0], [418.0, 118.0], [419.0, 118.0], [428.0, 118.0], [416.0, 118.0], [421.0, 118.0], [420.0, 118.0], [431.0, 118.0], [425.0, 118.0], [427.0, 118.0], [426.0, 118.0], [424.0, 118.0], [417.0, 118.0], [429.0, 118.0], [430.0, 118.0], [422.0, 118.0], [423.0, 118.0], [435.0, 118.0], [446.0, 118.0], [440.0, 118.0], [437.0, 118.0], [444.0, 118.0], [445.0, 118.0], [438.0, 118.0], [441.0, 118.0], [443.0, 118.0], [432.0, 118.0], [434.0, 118.0], [433.0, 118.0], [448.0, 118.0], [449.0, 118.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 449.0, "title": "Response Time Vs Request"}},
    getOptions: function() {
        return {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Response Time in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponseTimeVsRequest'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median response time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponseTimeVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponseTimeVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewResponseTimeVsRequest"), dataset, prepareOverviewOptions(options));

    }
};

// Response Time vs Request
function refreshResponseTimeVsRequest() {
    var infos = responseTimeVsRequestInfos;
    prepareSeries(infos.data);
    if (isGraph($("#flotResponseTimeVsRequest"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeVsRequest");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimeVsRequest", "#overviewResponseTimeVsRequest");
        $('#footerResponseRimeVsRequest .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var latenciesVsRequestInfos = {
    data: {"result": {"minY": 117.0, "minX": 8.0, "maxY": 146.0, "series": [{"data": [[8.0, 118.5], [18.0, 118.0], [26.0, 118.0], [35.0, 118.0], [41.0, 119.0], [53.0, 118.0], [58.0, 118.0], [69.0, 118.0], [76.0, 118.0], [87.0, 118.0], [91.0, 118.0], [105.0, 118.0], [108.0, 118.0], [114.0, 120.0], [117.0, 118.0], [131.0, 118.0], [134.0, 118.0], [148.0, 117.0], [149.0, 118.0], [166.0, 118.0], [163.0, 118.0], [177.0, 118.0], [178.0, 119.0], [187.0, 118.0], [194.0, 118.0], [206.0, 118.0], [215.0, 117.0], [220.0, 118.0], [230.0, 117.0], [239.0, 118.0], [233.0, 118.0], [249.0, 119.0], [255.0, 118.0], [251.0, 117.0], [270.0, 118.0], [268.0, 118.0], [299.0, 118.0], [289.0, 118.0], [312.0, 118.0], [308.0, 118.0], [309.0, 118.0], [323.0, 118.0], [327.0, 117.0], [330.0, 126.0], [340.0, 118.0], [348.0, 146.0], [350.0, 126.5], [351.0, 118.0], [343.0, 119.0], [363.0, 118.0], [364.0, 117.0], [362.0, 119.0], [365.0, 118.0], [357.0, 118.0], [377.0, 118.0], [381.0, 118.0], [374.0, 118.0], [398.0, 118.0], [392.0, 118.0], [399.0, 118.0], [389.0, 118.0], [395.0, 118.0], [396.0, 118.0], [387.0, 118.0], [393.0, 118.0], [397.0, 118.0], [391.0, 118.0], [413.0, 118.0], [407.0, 118.0], [410.0, 118.0], [411.0, 118.0], [412.0, 118.0], [403.0, 118.0], [402.0, 118.0], [401.0, 118.0], [415.0, 118.0], [414.0, 118.0], [400.0, 119.0], [406.0, 118.0], [405.0, 118.0], [404.0, 118.0], [408.0, 118.0], [409.0, 118.0], [418.0, 118.0], [419.0, 118.0], [428.0, 118.0], [416.0, 118.0], [421.0, 118.0], [420.0, 118.0], [431.0, 118.0], [425.0, 118.0], [427.0, 118.0], [426.0, 118.0], [424.0, 118.0], [417.0, 118.0], [429.0, 118.0], [430.0, 118.0], [422.0, 118.0], [423.0, 118.0], [435.0, 118.0], [446.0, 118.0], [440.0, 118.0], [437.0, 118.0], [444.0, 118.0], [445.0, 118.0], [438.0, 118.0], [441.0, 118.0], [443.0, 118.0], [432.0, 118.0], [434.0, 118.0], [433.0, 118.0], [448.0, 118.0], [449.0, 118.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 449.0, "title": "Latencies Vs Request"}},
    getOptions: function() {
        return{
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Latency in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: { noColumns: 2,show: true, container: '#legendLatencyVsRequest' },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median Latency time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesLatencyVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotLatenciesVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewLatenciesVsRequest"), dataset, prepareOverviewOptions(options));
    }
};

// Latencies vs Request
function refreshLatenciesVsRequest() {
        var infos = latenciesVsRequestInfos;
        prepareSeries(infos.data);
        if(isGraph($("#flotLatenciesVsRequest"))){
            infos.createGraph();
        }else{
            var choiceContainer = $("#choicesLatencyVsRequest");
            createLegend(choiceContainer, infos);
            infos.createGraph();
            setGraphZoomable("#flotLatenciesVsRequest", "#overviewLatenciesVsRequest");
            $('#footerLatenciesVsRequest .legendColorBox > div').each(function(i){
                $(this).clone().prependTo(choiceContainer.find("li").eq(i));
            });
        }
};

var hitsPerSecondInfos = {
        data: {"result": {"minY": 4.116666666666666, "minX": 1.78541742E12, "maxY": 417.53333333333336, "series": [{"data": [[1.78541754E12, 412.15], [1.78541742E12, 4.116666666666666], [1.78541772E12, 362.78333333333336], [1.7854176E12, 417.53333333333336], [1.78541766E12, 370.76666666666665], [1.78541748E12, 294.8833333333333]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.78541772E12, "title": "Hits Per Second"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of hits / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendHitsPerSecond"
                },
                selection: {
                    mode : 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y.2 hits/sec"
                }
            };
        },
        createGraph: function createGraph() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesHitsPerSecond"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotHitsPerSecond"), dataset, options);
            // setup overview
            $.plot($("#overviewHitsPerSecond"), dataset, prepareOverviewOptions(options));
        }
};

// Hits per second
function refreshHitsPerSecond(fixTimestamps) {
    var infos = hitsPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -10800000);
    }
    if (isGraph($("#flotHitsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesHitsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotHitsPerSecond", "#overviewHitsPerSecond");
        $('#footerHitsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var codesPerSecondInfos = {
        data: {"result": {"minY": 3.9833333333333334, "minX": 1.78541742E12, "maxY": 417.53333333333336, "series": [{"data": [[1.78541754E12, 412.15], [1.78541742E12, 3.9833333333333334], [1.78541772E12, 363.6166666666667], [1.7854176E12, 417.53333333333336], [1.78541766E12, 370.76666666666665], [1.78541748E12, 294.18333333333334]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.78541772E12, "title": "Codes Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendCodesPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "Number of Response Codes %s at %x was %y.2 responses / sec"
                }
            };
        },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesCodesPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotCodesPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewCodesPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Codes per second
function refreshCodesPerSecond(fixTimestamps) {
    var infos = codesPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -10800000);
    }
    if(isGraph($("#flotCodesPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesCodesPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotCodesPerSecond", "#overviewCodesPerSecond");
        $('#footerCodesPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var transactionsPerSecondInfos = {
        data: {"result": {"minY": 3.9833333333333334, "minX": 1.78541742E12, "maxY": 417.53333333333336, "series": [{"data": [[1.78541754E12, 412.15], [1.78541742E12, 3.9833333333333334], [1.78541772E12, 363.6166666666667], [1.7854176E12, 417.53333333333336], [1.78541766E12, 370.76666666666665], [1.78541748E12, 294.18333333333334]], "isOverall": false, "label": "POST - AUTH-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.78541772E12, "title": "Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTransactionsPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                }
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTransactionsPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTransactionsPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewTransactionsPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Transactions per second
function refreshTransactionsPerSecond(fixTimestamps) {
    var infos = transactionsPerSecondInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTransactionsPerSecond");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -10800000);
    }
    if(isGraph($("#flotTransactionsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTransactionsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTransactionsPerSecond", "#overviewTransactionsPerSecond");
        $('#footerTransactionsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var totalTPSInfos = {
        data: {"result": {"minY": 3.9833333333333334, "minX": 1.78541742E12, "maxY": 417.53333333333336, "series": [{"data": [[1.78541754E12, 412.15], [1.78541742E12, 3.9833333333333334], [1.78541772E12, 363.6166666666667], [1.7854176E12, 417.53333333333336], [1.78541766E12, 370.76666666666665], [1.78541748E12, 294.18333333333334]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.78541772E12, "title": "Total Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTotalTPS"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                },
                colors: ["#9ACD32", "#FF6347"]
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTotalTPS"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTotalTPS"), dataset, options);
        // setup overview
        $.plot($("#overviewTotalTPS"), dataset, prepareOverviewOptions(options));
    }
};

// Total Transactions per second
function refreshTotalTPS(fixTimestamps) {
    var infos = totalTPSInfos;
    // We want to ignore seriesFilter
    prepareSeries(infos.data, false, true);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -10800000);
    }
    if(isGraph($("#flotTotalTPS"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTotalTPS");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTotalTPS", "#overviewTotalTPS");
        $('#footerTotalTPS .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

// Collapse the graph matching the specified DOM element depending the collapsed
// status
function collapse(elem, collapsed){
    if(collapsed){
        $(elem).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    } else {
        $(elem).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        if (elem.id == "bodyBytesThroughputOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshBytesThroughputOverTime(true);
            }
            document.location.href="#bytesThroughputOverTime";
        } else if (elem.id == "bodyLatenciesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesOverTime(true);
            }
            document.location.href="#latenciesOverTime";
        } else if (elem.id == "bodyCustomGraph") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCustomGraph(true);
            }
            document.location.href="#responseCustomGraph";
        } else if (elem.id == "bodyConnectTimeOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshConnectTimeOverTime(true);
            }
            document.location.href="#connectTimeOverTime";
        } else if (elem.id == "bodyResponseTimePercentilesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimePercentilesOverTime(true);
            }
            document.location.href="#responseTimePercentilesOverTime";
        } else if (elem.id == "bodyResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeDistribution();
            }
            document.location.href="#responseTimeDistribution" ;
        } else if (elem.id == "bodySyntheticResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshSyntheticResponseTimeDistribution();
            }
            document.location.href="#syntheticResponseTimeDistribution" ;
        } else if (elem.id == "bodyActiveThreadsOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshActiveThreadsOverTime(true);
            }
            document.location.href="#activeThreadsOverTime";
        } else if (elem.id == "bodyTimeVsThreads") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTimeVsThreads();
            }
            document.location.href="#timeVsThreads" ;
        } else if (elem.id == "bodyCodesPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCodesPerSecond(true);
            }
            document.location.href="#codesPerSecond";
        } else if (elem.id == "bodyTransactionsPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTransactionsPerSecond(true);
            }
            document.location.href="#transactionsPerSecond";
        } else if (elem.id == "bodyTotalTPS") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTotalTPS(true);
            }
            document.location.href="#totalTPS";
        } else if (elem.id == "bodyResponseTimeVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeVsRequest();
            }
            document.location.href="#responseTimeVsRequest";
        } else if (elem.id == "bodyLatenciesVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesVsRequest();
            }
            document.location.href="#latencyVsRequest";
        }
    }
}

/*
 * Activates or deactivates all series of the specified graph (represented by id parameter)
 * depending on checked argument.
 */
function toggleAll(id, checked){
    var placeholder = document.getElementById(id);

    var cases = $(placeholder).find(':checkbox');
    cases.prop('checked', checked);
    $(cases).parent().children().children().toggleClass("legend-disabled", !checked);

    var choiceContainer;
    if ( id == "choicesBytesThroughputOverTime"){
        choiceContainer = $("#choicesBytesThroughputOverTime");
        refreshBytesThroughputOverTime(false);
    } else if(id == "choicesResponseTimesOverTime"){
        choiceContainer = $("#choicesResponseTimesOverTime");
        refreshResponseTimeOverTime(false);
    }else if(id == "choicesResponseCustomGraph"){
        choiceContainer = $("#choicesResponseCustomGraph");
        refreshCustomGraph(false);
    } else if ( id == "choicesLatenciesOverTime"){
        choiceContainer = $("#choicesLatenciesOverTime");
        refreshLatenciesOverTime(false);
    } else if ( id == "choicesConnectTimeOverTime"){
        choiceContainer = $("#choicesConnectTimeOverTime");
        refreshConnectTimeOverTime(false);
    } else if ( id == "choicesResponseTimePercentilesOverTime"){
        choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        refreshResponseTimePercentilesOverTime(false);
    } else if ( id == "choicesResponseTimePercentiles"){
        choiceContainer = $("#choicesResponseTimePercentiles");
        refreshResponseTimePercentiles();
    } else if(id == "choicesActiveThreadsOverTime"){
        choiceContainer = $("#choicesActiveThreadsOverTime");
        refreshActiveThreadsOverTime(false);
    } else if ( id == "choicesTimeVsThreads"){
        choiceContainer = $("#choicesTimeVsThreads");
        refreshTimeVsThreads();
    } else if ( id == "choicesSyntheticResponseTimeDistribution"){
        choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        refreshSyntheticResponseTimeDistribution();
    } else if ( id == "choicesResponseTimeDistribution"){
        choiceContainer = $("#choicesResponseTimeDistribution");
        refreshResponseTimeDistribution();
    } else if ( id == "choicesHitsPerSecond"){
        choiceContainer = $("#choicesHitsPerSecond");
        refreshHitsPerSecond(false);
    } else if(id == "choicesCodesPerSecond"){
        choiceContainer = $("#choicesCodesPerSecond");
        refreshCodesPerSecond(false);
    } else if ( id == "choicesTransactionsPerSecond"){
        choiceContainer = $("#choicesTransactionsPerSecond");
        refreshTransactionsPerSecond(false);
    } else if ( id == "choicesTotalTPS"){
        choiceContainer = $("#choicesTotalTPS");
        refreshTotalTPS(false);
    } else if ( id == "choicesResponseTimeVsRequest"){
        choiceContainer = $("#choicesResponseTimeVsRequest");
        refreshResponseTimeVsRequest();
    } else if ( id == "choicesLatencyVsRequest"){
        choiceContainer = $("#choicesLatencyVsRequest");
        refreshLatenciesVsRequest();
    }
    var color = checked ? "black" : "#818181";
    if(choiceContainer != null) {
        choiceContainer.find("label").each(function(){
            this.style.color = color;
        });
    }
}

