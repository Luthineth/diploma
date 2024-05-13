import '@mdi/font/css/materialdesignicons.css';
import 'vuetify/styles';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';

const vuetify = createVuetify({
    defaults: {
        VDataTable: {
            loadingText: 'Загрузка...',
            noDataText: 'Нет данных',
            itemsPerPageText: 'Элементов на странице:',
            pageText: '{0}-{1} из {2}',
            itemsPerPageOptions: [
                { value: 5, title: '5' },
                { value: 10, title: '10' },
                { value: 25, title: '25' },
                { value: 50, title: '50' },
                { value: 100, title: '100' },
                { value: -1, title: 'Все' },
            ],
        },
    },
    components,
    directives
});

export default vuetify;