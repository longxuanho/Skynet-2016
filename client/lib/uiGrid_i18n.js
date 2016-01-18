angular.module('ui.grid').config(['$provide', function($provide) { // 11913
    $provide.decorator('i18nService', ['$delegate', function($delegate) { // 11914
        $delegate.add('vi', { // 11915
            headerCell: { // 11916
                aria: { // 11917
                    defaultFilterLabel: 'Filter for column', // 11918
                    removeFilter: 'Remove Filter', // 11919
                    columnMenuButtonLabel: 'Column Menu' // 11920
                }, // 11921
                priority: 'Priority:', // 11922
                filterLabel: "Filter for column: " // 11923
            }, // 11924
            aggregate: { // 11925
                label: 'items' // 11926
            }, // 11927
            groupPanel: { // 11928
                description: 'Drag a column header here and drop it to group by that column.' // 11929
            }, // 11930
            search: { // 11931
                placeholder: 'Tìm...', // 11932
                showingItems: 'Đang hiển thị:', // 11933
                selectedItems: 'Selected Items:', // 11934
                totalItems: 'Tổng hạng mục:', // 11935
                size: 'Page Size:', // 11936
                first: 'First Page', // 11937
                next: 'Next Page', // 11938
                previous: 'Previous Page', // 11939
                last: 'Last Page' // 11940
            },
            menu: {
                text: 'Chọn Cột:'
            },
            sort: {
                ascending: 'Tăng Dần',
                descending: 'Giảm Dần',
                none: 'Trung Hòa',
                remove: 'Không Sắp Xếp'
            },
            column: {
                hide: 'Ẩn Cột'
            },
            aggregation: { // 11954
                count: 'số mục: ', // 11955
                sum: 'tổng: ', // 11956
                avg: 'tr.bình: ', // 11957
                min: 'min: ', // 11958
                max: 'max: ' // 11959
            }, // 11960
            pinning: { // 11961
                pinLeft: 'Ghim trái', // 11962
                pinRight: 'Ghim phải', // 11963
                unpin: 'Gỡ ghim' // 11964
            }, // 11965
            columnMenu: { // 11966
                close: 'Đóng' // 11967
            }, // 11968
            gridMenu: { // 11969
                aria: { // 11970
                    buttonLabel: 'Grid Menu' // 11971
                }, // 11972
                columns: 'Các cột:', // 11973
                importerTitle: 'Xuất dữ liệu...', // 11974
                exporterAllAsCsv: 'Tất cả dữ liệu sang Excel (csv)', // 11975
                exporterVisibleAsCsv: 'Các dữ liệu đang hiển thị sang Excel (csv)', // 11976
                exporterSelectedAsCsv: 'Các dữ liệu được chọn sang Excel (csv)', // 11977
                exporterAllAsPdf: 'Tất cả dữ liệu sang pdf', // 11978
                exporterVisibleAsPdf: 'Các dữ liệu đang hiển thị sang pdf', // 11979
                exporterSelectedAsPdf: 'Các dữ liệu được chọn sang pdf', // 11980
                clearAllFilters: 'Gỡ tất cả các bộ lọc' // 11981
            }, // 11982
            importer: { // 11983
                noHeaders: 'Column names were unable to be derived, does the file have a header?', // 11984
                noObjects: 'Objects were not able to be derived, was there data in the file other than headers?', // 11985
                invalidCsv: 'File was unable to be processed, is it valid CSV?', // 11986
                invalidJson: 'File was unable to be processed, is it valid Json?', // 11987
                jsonNotArray: 'Imported json file must contain an array, aborting.' // 11988
            }, // 11989
            pagination: { // 11990
                aria: { // 11991
                    pageToFirst: 'Page to first', // 11992
                    pageBack: 'Page back', // 11993
                    pageSelected: 'Selected page', // 11994
                    pageForward: 'Page forward', // 11995
                    pageToLast: 'Page to last' // 11996
                }, // 11997
                sizes: 'mục mỗi trang', // 11998
                totalItems: 'hạng mục', // 11999
                through: 'through', // 12000
                of: 'of' // 12001
            }, // 12002
            grouping: { // 12003
                group: 'Nhóm theo cột', // 12004
                ungroup: 'Bỏ nhóm', // 12005
                aggregate_count: 'Hàm: Count', // 12006
                aggregate_sum: 'Hàm: Sum', // 12007
                aggregate_max: 'Hàm: Max', // 12008
                aggregate_min: 'Hàm: Min', // 12009
                aggregate_avg: 'Hàm: Avg', // 12010
                aggregate_remove: 'Hàm: Remove' // 12011
            } // 12012
        }); // 12013
        return $delegate; // 12014
    }]); // 12015
}]);


// angular.module('ui.grid').config(['$provide', function($provide) { // 11913
//     $provide.decorator('i18nService', ['$delegate', function($delegate) { // 11914
//         $delegate.add('en', { // 11915
//             headerCell: { // 11916
//                 aria: { // 11917
//                     defaultFilterLabel: 'Filter for column', // 11918
//                     removeFilter: 'Remove Filter', // 11919
//                     columnMenuButtonLabel: 'Column Menu' // 11920
//                 }, // 11921
//                 priority: 'Priority:', // 11922
//                 filterLabel: "Filter for column: " // 11923
//             }, // 11924
//             aggregate: { // 11925
//                 label: 'items' // 11926
//             }, // 11927
//             groupPanel: { // 11928
//                 description: 'Drag a column header here and drop it to group by that column.' // 11929
//             }, // 11930
//             search: { // 11931
//                 placeholder: 'Search...', // 11932
//                 showingItems: 'Showing Items:', // 11933
//                 selectedItems: 'Selected Items:', // 11934
//                 totalItems: 'Total Items:', // 11935
//                 size: 'Page Size:', // 11936
//                 first: 'First Page', // 11937
//                 next: 'Next Page', // 11938
//                 previous: 'Previous Page', // 11939
//                 last: 'Last Page' // 11940
//             }, // 11941
//             menu: { // 11942
//                 text: 'Choose Columns:' // 11943
//             }, // 11944
//             sort: { // 11945
//                 ascending: 'Sort Ascending', // 11946
//                 descending: 'Sort Descending', // 11947
//                 none: 'Sort None', // 11948
//                 remove: 'Remove Sort' // 11949
//             }, // 11950
//             column: { // 11951
//                 hide: 'Hide Column' // 11952
//             }, // 11953
//             aggregation: { // 11954
//                 count: 'total rows: ', // 11955
//                 sum: 'total: ', // 11956
//                 avg: 'avg: ', // 11957
//                 min: 'min: ', // 11958
//                 max: 'max: ' // 11959
//             }, // 11960
//             pinning: { // 11961
//                 pinLeft: 'Pin Left', // 11962
//                 pinRight: 'Pin Right', // 11963
//                 unpin: 'Unpin' // 11964
//             }, // 11965
//             columnMenu: { // 11966
//                 close: 'Close' // 11967
//             }, // 11968
//             gridMenu: { // 11969
//                 aria: { // 11970
//                     buttonLabel: 'Grid Menu' // 11971
//                 }, // 11972
//                 columns: 'Columns:', // 11973
//                 importerTitle: 'Import file', // 11974
//                 exporterAllAsCsv: 'Export all data as csv', // 11975
//                 exporterVisibleAsCsv: 'Export visible data as csv', // 11976
//                 exporterSelectedAsCsv: 'Export selected data as csv', // 11977
//                 exporterAllAsPdf: 'Export all data as pdf', // 11978
//                 exporterVisibleAsPdf: 'Export visible data as pdf', // 11979
//                 exporterSelectedAsPdf: 'Export selected data as pdf', // 11980
//                 clearAllFilters: 'Clear all filters' // 11981
//             }, // 11982
//             importer: { // 11983
//                 noHeaders: 'Column names were unable to be derived, does the file have a header?', // 11984
//                 noObjects: 'Objects were not able to be derived, was there data in the file other than headers?', // 11985
//                 invalidCsv: 'File was unable to be processed, is it valid CSV?', // 11986
//                 invalidJson: 'File was unable to be processed, is it valid Json?', // 11987
//                 jsonNotArray: 'Imported json file must contain an array, aborting.' // 11988
//             }, // 11989
//             pagination: { // 11990
//                 aria: { // 11991
//                     pageToFirst: 'Page to first', // 11992
//                     pageBack: 'Page back', // 11993
//                     pageSelected: 'Selected page', // 11994
//                     pageForward: 'Page forward', // 11995
//                     pageToLast: 'Page to last' // 11996
//                 }, // 11997
//                 sizes: 'items per page', // 11998
//                 totalItems: 'items', // 11999
//                 through: 'through', // 12000
//                 of: 'of' // 12001
//             }, // 12002
//             grouping: { // 12003
//                 group: 'Group', // 12004
//                 ungroup: 'Ungroup', // 12005
//                 aggregate_count: 'Agg: Count', // 12006
//                 aggregate_sum: 'Agg: Sum', // 12007
//                 aggregate_max: 'Agg: Max', // 12008
//                 aggregate_min: 'Agg: Min', // 12009
//                 aggregate_avg: 'Agg: Avg', // 12010
//                 aggregate_remove: 'Agg: Remove' // 12011
//             } // 12012
//         }); // 12013
//         return $delegate; // 12014
//     }]); // 12015
// }]);
