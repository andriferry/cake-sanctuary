export interface Invoice {
    invoice: string;
    paymentStatus: 'Pending' | 'Unpaid' | 'Paid';
    totalAmount: string;
    paymentMethod: string;
    date: string;
    collected: string;
}

export interface Menu {
    title: string;
    items?: number;
    icon?: string;
    value?: string;
    img?: string;
    price?: number,
    category?: any[]
}

export const invoices: Invoice[] = [
    {
        invoice: 'INV27',
        paymentStatus: 'Pending',
        totalAmount: '$780.18',
        paymentMethod: 'Paypal',
        collected: 'Gordon Flatley DDS',
        date: '2025-01-03T17:06:31.515Z',
    },
    {
        invoice: 'INV28',
        paymentStatus: 'Unpaid',
        totalAmount: '$384.41',
        paymentMethod: 'Paypal',
        collected: 'Guadalupe Lynch',
        date: '2025-01-01T17:24:48.831Z',
    },
    {
        invoice: 'INV72',
        paymentStatus: 'Paid',
        totalAmount: '$379.22',
        paymentMethod: 'Paypal',
        collected: 'Eric Gibson',
        date: '2024-12-30T14:06:04.030Z',
    },
    {
        invoice: 'INV59',
        paymentStatus: 'Paid',
        totalAmount: '$53.97',
        paymentMethod: 'Credit Card',
        collected: 'Bernard Ziemann',
        date: '2025-01-04T15:11:10.028Z',
    },
    {
        invoice: 'INV42',
        paymentStatus: 'Unpaid',
        totalAmount: '$927.12',
        paymentMethod: 'Paypal',
        collected: 'Marian Kiehn',
        date: '2024-12-31T16:47:14.136Z',
    },
    {
        invoice: 'INV49',
        paymentStatus: 'Unpaid',
        totalAmount: '$874.91',
        paymentMethod: 'Bank Transfer',
        collected: 'Dr. Perry Lueilwitz',
        date: '2025-01-05T20:38:01.435Z',
    },
    {
        invoice: 'INV11',
        paymentStatus: 'Unpaid',
        totalAmount: '$721.89',
        paymentMethod: 'Paypal',
        collected: 'Jan Hoeger',
        date: '2025-01-04T13:39:12.366Z',
    },
    {
        invoice: 'INV59',
        paymentStatus: 'Paid',
        totalAmount: '$160.85',
        paymentMethod: 'Bank Transfer',
        collected: 'Larry Swift',
        date: '2025-01-02T12:05:52.305Z',
    },
    {
        invoice: 'INV64',
        paymentStatus: 'Paid',
        totalAmount: '$459.41',
        paymentMethod: 'Credit Card',
        collected: 'Shane Boyle',
        date: '2025-01-05T05:03:35.140Z',
    },
    {
        invoice: 'INV33',
        paymentStatus: 'Pending',
        totalAmount: '$276.67',
        paymentMethod: 'Bank Transfer',
        collected: 'Erica Leannon',
        date: '2025-01-05T13:16:54.958Z',
    },
    {
        invoice: 'INV85',
        paymentStatus: 'Paid',
        totalAmount: '$62.56',
        paymentMethod: 'Credit Card',
        collected: 'Patricia Gutmann',
        date: '2025-01-04T03:54:55.696Z',
    },
    {
        invoice: 'INV16',
        paymentStatus: 'Pending',
        totalAmount: '$752.77',
        paymentMethod: 'Bank Transfer',
        collected: 'Frederick Hamill',
        date: '2025-01-03T10:32:00.918Z',
    },
    {
        invoice: 'INV41',
        paymentStatus: 'Paid',
        totalAmount: '$710.21',
        paymentMethod: 'Paypal',
        collected: 'Judith Gerlach V',
        date: '2024-12-30T17:06:10.604Z',
    },
    {
        invoice: 'INV68',
        paymentStatus: 'Unpaid',
        totalAmount: '$79.39',
        paymentMethod: 'Credit Card',
        collected: 'Timmy Muller Sr.',
        date: '2024-12-29T01:10:10.532Z',
    },
    {
        invoice: 'INV71',
        paymentStatus: 'Unpaid',
        totalAmount: '$148.95',
        paymentMethod: 'Bank Transfer',
        collected: 'Meredith Heaney',
        date: '2024-12-28T13:14:54.835Z',
    },
    {
        invoice: 'INV14',
        paymentStatus: 'Pending',
        totalAmount: '$261.46',
        paymentMethod: 'Paypal',
        collected: 'Brandy Hermiston',
        date: '2025-01-02T18:49:23.837Z',
    },
    {
        invoice: 'INV45',
        paymentStatus: 'Paid',
        totalAmount: '$908.81',
        paymentMethod: 'Credit Card',
        collected: 'Mr. Ramiro Hilpert',
        date: '2024-12-31T07:23:02.096Z',
    },
    {
        invoice: 'INV35',
        paymentStatus: 'Paid',
        totalAmount: '$455.57',
        paymentMethod: 'Credit Card',
        collected: 'Aaron Jacobs',
        date: '2024-12-27T09:36:08.796Z',
    },
    {
        invoice: 'INV78',
        paymentStatus: 'Pending',
        totalAmount: '$934.46',
        paymentMethod: 'Credit Card',
        collected: 'Manuel Schneider',
        date: '2025-01-05T19:25:14.269Z',
    },
    {
        invoice: 'INV81',
        paymentStatus: 'Paid',
        totalAmount: '$268.31',
        paymentMethod: 'Credit Card',
        collected: 'Miss Christy Witting',
        date: '2025-01-05T02:14:39.774Z',
    },
    {
        invoice: 'INV55',
        paymentStatus: 'Pending',
        totalAmount: '$761.17',
        paymentMethod: 'Paypal',
        collected: 'Kathryn Ritchie Sr.',
        date: '2025-01-01T09:16:54.420Z',
    },
    {
        invoice: 'INV37',
        paymentStatus: 'Paid',
        totalAmount: '$624.88',
        paymentMethod: 'Credit Card',
        collected: 'Johnny Runolfsdottir',
        date: '2024-12-29T23:14:35.074Z',
    },
    {
        invoice: 'INV91',
        paymentStatus: 'Paid',
        totalAmount: '$869.86',
        paymentMethod: 'Paypal',
        collected: 'Caroline Becker',
        date: '2024-12-29T16:52:01.507Z',
    },
    {
        invoice: 'INV46',
        paymentStatus: 'Paid',
        totalAmount: '$850.11',
        paymentMethod: 'Credit Card',
        collected: 'Caroline Bauch',
        date: '2024-12-28T20:36:50.102Z',
    },
    {
        invoice: 'INV64',
        paymentStatus: 'Pending',
        totalAmount: '$649.26',
        paymentMethod: 'Bank Transfer',
        collected: 'Lola Medhurst',
        date: '2024-12-27T17:44:26.949Z',
    },
    {
        invoice: 'INV17',
        paymentStatus: 'Paid',
        totalAmount: '$807.04',
        paymentMethod: 'Bank Transfer',
        collected: 'Willard Jacobson PhD',
        date: '2024-12-28T00:31:47.049Z',
    },
    {
        invoice: 'INV55',
        paymentStatus: 'Unpaid',
        totalAmount: '$531.26',
        paymentMethod: 'Credit Card',
        collected: 'Simon Effertz',
        date: '2025-01-02T13:40:17.470Z',
    },
    {
        invoice: 'INV7',
        paymentStatus: 'Unpaid',
        totalAmount: '$106.87',
        paymentMethod: 'Paypal',
        collected: 'Sonya Glover',
        date: '2024-12-27T12:57:42.465Z',
    },
    {
        invoice: 'INV15',
        paymentStatus: 'Pending',
        totalAmount: '$789.86',
        paymentMethod: 'Bank Transfer',
        collected: 'Dora Rempel',
        date: '2024-12-28T23:55:19.804Z',
    },
    {
        invoice: 'INV12',
        paymentStatus: 'Pending',
        totalAmount: '$308.77',
        paymentMethod: 'Paypal',
        collected: 'Jake Kirlin',
        date: '2024-12-31T07:32:57.930Z',
    },
    {
        invoice: 'INV6',
        paymentStatus: 'Unpaid',
        totalAmount: '$190.48',
        paymentMethod: 'Paypal',
        collected: 'Dominic Keeling',
        date: '2025-01-02T03:11:05.472Z',
    },
    {
        invoice: 'INV52',
        paymentStatus: 'Pending',
        totalAmount: '$600.82',
        paymentMethod: 'Credit Card',
        collected: 'Louis Bednar III',
        date: '2025-01-04T22:49:13.539Z',
    },
    {
        invoice: 'INV72',
        paymentStatus: 'Pending',
        totalAmount: '$487.34',
        paymentMethod: 'Paypal',
        collected: 'Tyler Gerlach Sr.',
        date: '2025-01-02T10:28:04.918Z',
    },
    {
        invoice: 'INV79',
        paymentStatus: 'Paid',
        totalAmount: '$874.70',
        paymentMethod: 'Paypal',
        collected: 'Mr. Ricardo Cruickshank',
        date: '2024-12-27T20:54:48.693Z',
    },
    {
        invoice: 'INV36',
        paymentStatus: 'Paid',
        totalAmount: '$504.85',
        paymentMethod: 'Credit Card',
        collected: 'Gladys Cummings III',
        date: '2024-12-30T13:58:44.595Z',
    },
    {
        invoice: 'INV44',
        paymentStatus: 'Unpaid',
        totalAmount: '$182.38',
        paymentMethod: 'Bank Transfer',
        collected: 'Geoffrey Swift',
        date: '2025-01-02T11:26:52.531Z',
    },
    {
        invoice: 'INV2',
        paymentStatus: 'Unpaid',
        totalAmount: '$571.54',
        paymentMethod: 'Bank Transfer',
        collected: 'Wilbert Spinka III',
        date: '2025-01-05T04:03:20.195Z',
    },
    {
        invoice: 'INV13',
        paymentStatus: 'Paid',
        totalAmount: '$616.08',
        paymentMethod: 'Credit Card',
        collected: 'Clark Dickens',
        date: '2024-12-31T19:28:41.908Z',
    },
    {
        invoice: 'INV15',
        paymentStatus: 'Paid',
        totalAmount: '$618.59',
        paymentMethod: 'Bank Transfer',
        collected: 'Austin Wehner',
        date: '2025-01-04T08:28:50.748Z',
    },
    {
        invoice: 'INV16',
        paymentStatus: 'Unpaid',
        totalAmount: '$835.81',
        paymentMethod: 'Credit Card',
        collected: 'Calvin Huels',
        date: '2024-12-30T03:07:59.359Z',
    },
    {
        invoice: 'INV96',
        paymentStatus: 'Unpaid',
        totalAmount: '$153.21',
        paymentMethod: 'Bank Transfer',
        collected: 'Eleanor Dickens III',
        date: '2024-12-27T06:46:59.276Z',
    },
    {
        invoice: 'INV86',
        paymentStatus: 'Unpaid',
        totalAmount: '$76.35',
        paymentMethod: 'Credit Card',
        collected: 'Mr. Terry Schamberger',
        date: '2024-12-30T11:40:58.498Z',
    },
    {
        invoice: 'INV22',
        paymentStatus: 'Paid',
        totalAmount: '$539.10',
        paymentMethod: 'Paypal',
        collected: 'Garry Schuppe',
        date: '2024-12-27T13:49:40.726Z',
    },
    {
        invoice: 'INV1',
        paymentStatus: 'Paid',
        totalAmount: '$825.79',
        paymentMethod: 'Credit Card',
        collected: 'Brenda Tillman',
        date: '2025-01-05T00:35:37.699Z',
    },
    {
        invoice: 'INV47',
        paymentStatus: 'Paid',
        totalAmount: '$486.68',
        paymentMethod: 'Bank Transfer',
        collected: 'Janice Bayer DDS',
        date: '2024-12-31T20:50:27.308Z',
    },
    {
        invoice: 'INV91',
        paymentStatus: 'Unpaid',
        totalAmount: '$209.46',
        paymentMethod: 'Bank Transfer',
        collected: 'Marian Smitham',
        date: '2024-12-30T21:09:42.064Z',
    },
    {
        invoice: 'INV36',
        paymentStatus: 'Unpaid',
        totalAmount: '$220.93',
        paymentMethod: 'Credit Card',
        collected: 'Naomi Ledner',
        date: '2024-12-27T05:21:50.256Z',
    },
    {
        invoice: 'INV0',
        paymentStatus: 'Paid',
        totalAmount: '$83.77',
        paymentMethod: 'Paypal',
        collected: 'Olga Jast',
        date: '2024-12-31T20:58:21.991Z',
    },
    {
        invoice: 'INV58',
        paymentStatus: 'Paid',
        totalAmount: '$892.86',
        paymentMethod: 'Paypal',
        collected: 'Emmett Kreiger',
        date: '2024-12-31T09:59:50.696Z',
    },
    {
        invoice: 'INV77',
        paymentStatus: 'Unpaid',
        totalAmount: '$568.39',
        paymentMethod: 'Paypal',
        collected: 'Mrs. Rhonda Torp',
        date: '2024-12-29T10:35:44.720Z',
    },
    {
        invoice: 'INV49',
        paymentStatus: 'Pending',
        totalAmount: '$324.04',
        paymentMethod: 'Paypal',
        collected: 'Marlon Friesen',
        date: '2025-01-01T05:23:41.630Z',
    },
    {
        invoice: 'INV23',
        paymentStatus: 'Pending',
        totalAmount: '$381.72',
        paymentMethod: 'Paypal',
        collected: 'Dr. Rogelio Kohler',
        date: '2025-01-03T17:57:07.233Z',
    },
    {
        invoice: 'INV26',
        paymentStatus: 'Unpaid',
        totalAmount: '$389.59',
        paymentMethod: 'Bank Transfer',
        collected: 'Dr. Luther Hyatt',
        date: '2025-01-01T01:56:51.117Z',
    },
    {
        invoice: 'INV86',
        paymentStatus: 'Paid',
        totalAmount: '$597.86',
        paymentMethod: 'Paypal',
        collected: 'Miss Alison Moore',
        date: '2024-12-29T20:00:17.972Z',
    },
    {
        invoice: 'INV7',
        paymentStatus: 'Paid',
        totalAmount: '$787.27',
        paymentMethod: 'Paypal',
        collected: 'Elmer Senger',
        date: '2025-01-02T06:13:01.827Z',
    },
    {
        invoice: 'INV26',
        paymentStatus: 'Pending',
        totalAmount: '$198.94',
        paymentMethod: 'Bank Transfer',
        collected: 'Elvira Rath V',
        date: '2025-01-01T11:57:26.076Z',
    },
    {
        invoice: 'INV88',
        paymentStatus: 'Paid',
        totalAmount: '$478.76',
        paymentMethod: 'Paypal',
        collected: 'Julio Steuber',
        date: '2025-01-05T15:13:49.593Z',
    },
    {
        invoice: 'INV44',
        paymentStatus: 'Pending',
        totalAmount: '$900.29',
        paymentMethod: 'Bank Transfer',
        collected: 'Nichole Ruecker',
        date: '2024-12-27T16:36:15.198Z',
    },
    {
        invoice: 'INV18',
        paymentStatus: 'Paid',
        totalAmount: '$843.80',
        paymentMethod: 'Bank Transfer',
        collected: 'Marjorie Zemlak',
        date: '2024-12-31T19:56:11.197Z',
    },
    {
        invoice: 'INV65',
        paymentStatus: 'Unpaid',
        totalAmount: '$307.96',
        paymentMethod: 'Paypal',
        collected: 'Mr. Carl Franey PhD',
        date: '2024-12-28T20:31:42.620Z',
    },
    {
        invoice: 'INV85',
        paymentStatus: 'Unpaid',
        totalAmount: '$388.58',
        paymentMethod: 'Bank Transfer',
        collected: 'Mr. Stephen VonRueden',
        date: '2024-12-31T19:01:23.781Z',
    },
    {
        invoice: 'INV100',
        paymentStatus: 'Unpaid',
        totalAmount: '$319.07',
        paymentMethod: 'Bank Transfer',
        collected: 'Mrs. Dana Spencer',
        date: '2025-01-02T06:37:56.294Z',
    },
    {
        invoice: 'INV29',
        paymentStatus: 'Pending',
        totalAmount: '$824.45',
        paymentMethod: 'Bank Transfer',
        collected: 'Aaron McKenzie',
        date: '2024-12-31T08:02:09.548Z',
    },
    {
        invoice: 'INV31',
        paymentStatus: 'Pending',
        totalAmount: '$979.50',
        paymentMethod: 'Credit Card',
        collected: "Dr. Christy O'Kon",
        date: '2025-01-04T12:23:45.133Z',
    },
    {
        invoice: 'INV12',
        paymentStatus: 'Unpaid',
        totalAmount: '$525.88',
        paymentMethod: 'Credit Card',
        collected: 'Clyde Veum',
        date: '2025-01-01T05:21:47.665Z',
    },
    {
        invoice: 'INV80',
        paymentStatus: 'Unpaid',
        totalAmount: '$169.50',
        paymentMethod: 'Paypal',
        collected: 'Cheryl Kuhn PhD',
        date: '2025-01-01T06:34:37.401Z',
    },
    {
        invoice: 'INV96',
        paymentStatus: 'Pending',
        totalAmount: '$140.15',
        paymentMethod: 'Credit Card',
        collected: 'Margie Jenkins',
        date: '2024-12-30T14:03:53.123Z',
    },
    {
        invoice: 'INV60',
        paymentStatus: 'Unpaid',
        totalAmount: '$393.71',
        paymentMethod: 'Paypal',
        collected: 'Jerome Cummings',
        date: '2024-12-27T12:22:29.250Z',
    },
    {
        invoice: 'INV14',
        paymentStatus: 'Unpaid',
        totalAmount: '$360.06',
        paymentMethod: 'Credit Card',
        collected: 'Tracy Roob',
        date: '2024-12-31T19:19:22.131Z',
    },
    {
        invoice: 'INV24',
        paymentStatus: 'Paid',
        totalAmount: '$922.24',
        paymentMethod: 'Credit Card',
        collected: 'Darrell Sporer-Wintheiser',
        date: '2024-12-27T18:06:02.348Z',
    },
    {
        invoice: 'INV12',
        paymentStatus: 'Unpaid',
        totalAmount: '$479.23',
        paymentMethod: 'Paypal',
        collected: 'Cody Friesen',
        date: '2024-12-27T13:46:33.311Z',
    },
    {
        invoice: 'INV56',
        paymentStatus: 'Pending',
        totalAmount: '$409.79',
        paymentMethod: 'Credit Card',
        collected: 'Mr. Jermaine Doyle',
        date: '2025-01-02T00:09:01.755Z',
    },
    {
        invoice: 'INV6',
        paymentStatus: 'Pending',
        totalAmount: '$404.30',
        paymentMethod: 'Credit Card',
        collected: 'Mrs. Mae Corwin',
        date: '2025-01-04T20:32:49.865Z',
    },
    {
        invoice: 'INV2',
        paymentStatus: 'Unpaid',
        totalAmount: '$203.84',
        paymentMethod: 'Bank Transfer',
        collected: 'Ms. Kristine Kirlin',
        date: '2024-12-27T19:03:18.184Z',
    },
    {
        invoice: 'INV5',
        paymentStatus: 'Paid',
        totalAmount: '$74.43',
        paymentMethod: 'Bank Transfer',
        collected: 'Whitney Walter',
        date: '2025-01-03T08:41:39.553Z',
    },
    {
        invoice: 'INV30',
        paymentStatus: 'Pending',
        totalAmount: '$209.60',
        paymentMethod: 'Credit Card',
        collected: 'Mr. Leo Schinner',
        date: '2024-12-31T09:00:06.620Z',
    },
    {
        invoice: 'INV90',
        paymentStatus: 'Paid',
        totalAmount: '$212.53',
        paymentMethod: 'Paypal',
        collected: 'Taylor Boehm I',
        date: '2024-12-31T13:45:51.074Z',
    },
    {
        invoice: 'INV13',
        paymentStatus: 'Unpaid',
        totalAmount: '$950.56',
        paymentMethod: 'Credit Card',
        collected: 'Gina MacGyver',
        date: '2024-12-27T07:19:19.495Z',
    },
    {
        invoice: 'INV35',
        paymentStatus: 'Paid',
        totalAmount: '$808.42',
        paymentMethod: 'Credit Card',
        collected: 'Mrs. Nancy Maggio',
        date: '2024-12-31T15:32:41.521Z',
    },
    {
        invoice: 'INV95',
        paymentStatus: 'Unpaid',
        totalAmount: '$75.40',
        paymentMethod: 'Credit Card',
        collected: 'Mr. Herbert Bechtelar',
        date: '2025-01-04T19:56:01.819Z',
    },
    {
        invoice: 'INV55',
        paymentStatus: 'Unpaid',
        totalAmount: '$544.11',
        paymentMethod: 'Paypal',
        collected: 'Ida Dicki',
        date: '2024-12-30T05:09:26.904Z',
    },
    {
        invoice: 'INV3',
        paymentStatus: 'Paid',
        totalAmount: '$911.75',
        paymentMethod: 'Credit Card',
        collected: 'Jenna Mann',
        date: '2025-01-03T14:13:46.254Z',
    },
    {
        invoice: 'INV29',
        paymentStatus: 'Unpaid',
        totalAmount: '$527.58',
        paymentMethod: 'Paypal',
        collected: 'Don Schulist',
        date: '2024-12-30T17:13:02.237Z',
    },
    {
        invoice: 'INV77',
        paymentStatus: 'Unpaid',
        totalAmount: '$331.32',
        paymentMethod: 'Paypal',
        collected: 'Jeremiah Frami',
        date: '2025-01-05T05:03:37.312Z',
    },
    {
        invoice: 'INV93',
        paymentStatus: 'Pending',
        totalAmount: '$405.81',
        paymentMethod: 'Paypal',
        collected: 'Arnold Bednar',
        date: '2024-12-29T01:58:54.045Z',
    },
    {
        invoice: 'INV84',
        paymentStatus: 'Paid',
        totalAmount: '$653.50',
        paymentMethod: 'Credit Card',
        collected: 'Jerry Morissette',
        date: '2025-01-05T23:17:52.938Z',
    },
    {
        invoice: 'INV84',
        paymentStatus: 'Pending',
        totalAmount: '$814.93',
        paymentMethod: 'Paypal',
        collected: 'Cory Cremin',
        date: '2025-01-05T05:12:16.393Z',
    },
    {
        invoice: 'INV3',
        paymentStatus: 'Paid',
        totalAmount: '$860.43',
        paymentMethod: 'Credit Card',
        collected: 'Herbert Haley',
        date: '2024-12-31T06:39:39.814Z',
    },
    {
        invoice: 'INV20',
        paymentStatus: 'Paid',
        totalAmount: '$796.62',
        paymentMethod: 'Bank Transfer',
        collected: 'Ms. Brenda Herman III',
        date: '2024-12-27T23:02:24.669Z',
    },
    {
        invoice: 'INV89',
        paymentStatus: 'Pending',
        totalAmount: '$418.85',
        paymentMethod: 'Paypal',
        collected: 'Felix McKenzie',
        date: '2024-12-27T13:29:01.226Z',
    },
    {
        invoice: 'INV81',
        paymentStatus: 'Unpaid',
        totalAmount: '$391.56',
        paymentMethod: 'Credit Card',
        collected: 'Eugene Lueilwitz',
        date: '2025-01-05T00:29:32.330Z',
    },
    {
        invoice: 'INV55',
        paymentStatus: 'Paid',
        totalAmount: '$510.30',
        paymentMethod: 'Credit Card',
        collected: 'Miss Natalie Tromp',
        date: '2025-01-02T08:32:02.898Z',
    },
    {
        invoice: 'INV25',
        paymentStatus: 'Unpaid',
        totalAmount: '$82.44',
        paymentMethod: 'Credit Card',
        collected: 'Miss Eula Cremin',
        date: '2024-12-27T14:12:43.962Z',
    },
    {
        invoice: 'INV73',
        paymentStatus: 'Pending',
        totalAmount: '$651.89',
        paymentMethod: 'Credit Card',
        collected: 'Timothy Schaden',
        date: '2024-12-27T23:23:13.605Z',
    },
    {
        invoice: 'INV78',
        paymentStatus: 'Paid',
        totalAmount: '$973.11',
        paymentMethod: 'Credit Card',
        collected: 'Blanca Huels IV',
        date: '2024-12-31T11:04:00.292Z',
    },
    {
        invoice: 'INV92',
        paymentStatus: 'Unpaid',
        totalAmount: '$457.28',
        paymentMethod: 'Credit Card',
        collected: 'Yvonne Hilll',
        date: '2025-01-05T18:53:12.779Z',
    },
    {
        invoice: 'INV51',
        paymentStatus: 'Paid',
        totalAmount: '$162.48',
        paymentMethod: 'Bank Transfer',
        collected: 'Chester Heaney',
        date: '2025-01-04T05:35:23.885Z',
    },
    {
        invoice: 'INV69',
        paymentStatus: 'Paid',
        totalAmount: '$96.99',
        paymentMethod: 'Credit Card',
        collected: 'Andres Mills',
        date: '2024-12-27T21:15:58.308Z',
    },
    {
        invoice: 'INV100',
        paymentStatus: 'Pending',
        totalAmount: '$731.82',
        paymentMethod: 'Credit Card',
        collected: 'Dr. Kerry Barton',
        date: '2025-01-03T15:38:21.688Z',
    },
    {
        invoice: 'INV80',
        paymentStatus: 'Pending',
        totalAmount: '$723.37',
        paymentMethod: 'Bank Transfer',
        collected: 'Sarah Hoeger',
        date: '2025-01-01T09:12:37.587Z',
    },
];

export const annualYearlyAnalutics = [
    {
        title: 'Sales',
        icon: 'tabler:currency-dollar',
        chartData: [90, 100, 120, 140, 95, 80, 80, 99, 89, 90, 100, 120],
        bgColors: [
            'rgba(236, 72, 153, 0.5)',
            'rgba(236, 72, 153, 0.5)',
            'rgba(236, 72, 153, 0.5)',
            '#ec4899',
            'rgba(236, 72, 153, 0.5)',
            'rgba(236, 72, 153, 0.5)',
            'rgba(236, 72, 153, 0.5)',
            'rgba(236, 72, 153, 0.5)',
            'rgba(236, 72, 153, 0.5)',
            'rgba(236, 72, 153, 0.5)',
            'rgba(236, 72, 153, 0.5)',
            'rgba(236, 72, 153, 0.5)',
        ],
    },
    {
        title: 'Customer',
        icon: 'tabler:users-group',
        chartData: [20, 40, 50, 60, 80, 100, 80, 70, 89, 90, 50, 50],
        bgColors: [
            'rgba(236, 72, 153, 0.5)',
            'rgba(236, 72, 153, 0.5)',
            'rgba(236, 72, 153, 0.5)',
            'rgba(236, 72, 153, 0.5)',
            'rgba(236, 72, 153, 0.5)',
            '#ec4899',
            'rgba(236, 72, 153, 0.5)',
            'rgba(236, 72, 153, 0.5)',
            'rgba(236, 72, 153, 0.5)',
            'rgba(236, 72, 153, 0.5)',
            'rgba(236, 72, 153, 0.5)',
            'rgba(236, 72, 153, 0.5)',
        ],
    },
    {
        title: 'Orders',
        icon: 'tabler:bowl-chopsticks',
        chartData: [90, 110, 80, 60, 80, 100, 80, 70, 89, 90, 50, 50],
        bgColors: [
            'rgba(236, 72, 153, 0.5)',
            '#ec4899',
            'rgba(236, 72, 153, 0.5)',
            'rgba(236, 72, 153, 0.5)',
            'rgba(236, 72, 153, 0.5)',
            'rgba(236, 72, 153, 0.5)',
            'rgba(236, 72, 153, 0.5)',
            'rgba(236, 72, 153, 0.5)',
            'rgba(236, 72, 153, 0.5)',
            'rgba(236, 72, 153, 0.5)',
            'rgba(236, 72, 153, 0.5)',
            'rgba(236, 72, 153, 0.5)',
        ],
    },
    {
        title: 'Tips',
        icon: 'tabler:wallet',
        chartData: [90, 100, 100, 60, 80, 100, 80, 70, 89, 90, 50, 50],
        bgColors: [
            'rgba(236, 72, 153, 0.5)',
            '#ec4899',
            'rgba(236, 72, 153, 0.5)',
            'rgba(236, 72, 153, 0.5)',
            'rgba(236, 72, 153, 0.5)',
            'rgba(236, 72, 153, 0.5)',
            'rgba(236, 72, 153, 0.5)',
            'rgba(236, 72, 153, 0.5)',
            'rgba(236, 72, 153, 0.5)',
            'rgba(236, 72, 153, 0.5)',
            'rgba(236, 72, 153, 0.5)',
            'rgba(236, 72, 153, 0.5)',
        ],
    },
    {
        title: 'Income',
        icon: 'tabler:chart-pie-2',
        chartData: [190, 100, 200, 60, 80, 100, 80, 170, 89, 90, 50, 50],
        bgColors: [
            'rgba(236, 72, 153, 0.5)',
            'rgba(236, 72, 153, 0.5)',
            '#ec4899',
            'rgba(236, 72, 153, 0.5)',
            'rgba(236, 72, 153, 0.5)',
            'rgba(236, 72, 153, 0.5)',
            'rgba(236, 72, 153, 0.5)',
            'rgba(236, 72, 153, 0.5)',
            'rgba(236, 72, 153, 0.5)',
            'rgba(236, 72, 153, 0.5)',
            'rgba(236, 72, 153, 0.5)',
            'rgba(236, 72, 153, 0.5)',
        ],
    },
    {
        title: 'Satisfaction',
        icon: 'tabler:mood-smile',
        chartData: [20, 30, 40, 60, 80, 100, 120, 110, 89, 90, 50, 50],
        bgColors: [
            'rgba(236, 72, 153, 0.5)',
            'rgba(236, 72, 153, 0.5)',
            'rgba(236, 72, 153, 0.5)',
            'rgba(236, 72, 153, 0.5)',
            'rgba(236, 72, 153, 0.5)',
            'rgba(236, 72, 153, 0.5)',
            '#ec4899',
            'rgba(236, 72, 153, 0.5)',
            'rgba(236, 72, 153, 0.5)',
            'rgba(236, 72, 153, 0.5)',
            'rgba(236, 72, 153, 0.5)',
            'rgba(236, 72, 153, 0.5)',
        ],
    },
];

export const upsaleData = [
    {
        icon: 'noto:croissant',
        title: 'Croissant',
        amount: '150',
    },
    {
        icon: 'noto:doughnut',
        title: 'Doughnut',
        amount: '200',
    },
    {
        icon: 'noto:french-fries',
        title: 'French Fries',
        amount: '400',
    },
    {
        icon: 'noto:hot-beverage',
        title: 'Coffee',
        amount: '130',
    },
    {
        icon: 'noto:bagel',
        title: 'Bagel',
        amount: '200',
    },
    {
        icon: 'noto:sandwich',
        title: 'Sandwich',
        amount: '50',
    },
    {
        icon: 'noto:cupcake',
        title: 'Cupcake',
        amount: '120',
    },
];

export const menuCategory: Menu[] = [
    {
        title: 'Main Course',
        items: 0,
        icon: 'tabler:star-filled',
        value: 'main',
    },
    {
        title: 'Healthy Food',
        items: 0,
        icon: 'icon-park-outline:vegetables',
        value: 'healthy',
    },
    {
        title: 'Fast Food',
        items: 0,
        icon: 'icon-park-outline:hamburger-one',
        value: 'fast-food',
    },
    {
        title: 'Beverage',
        items: 0,
        icon: 'icon-park-outline:tea',
        value: 'beverage',
    },
    {
        title: 'Cake',
        items: 0,
        icon: 'icon-park-outline:cake-four',
        value: 'cake',
    },
];

export const menus: Menu[] = [
    {
        title: 'Sunny Side Egg',
        img: 'https://images.unsplash.com/photo-1465014925804-7b9ede58d0d7',
        price: 10,
        category: ['healthy']
    },
    {
        title: 'Pancake',
        img: 'https://images.unsplash.com/photo-1499638309848-e9968540da83?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGJyZWFrZmFzdHxlbnwwfHwwfHx8MA%3D%3D',
        price: 12,
        category: ['healthy']
    },
    {
        title: 'Roasted Turkey',
        img: 'https://plus.unsplash.com/premium_photo-1663840345377-3813d196d5da?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bWFpbiUyMGNvdXJzZXxlbnwwfHwwfHx8MA%3D%3D',
        price: 40,
        category: ['main']
    },
    {
        title: 'Steak Medium Rare',
        img: 'https://images.unsplash.com/photo-1585903211716-c5633c87554d?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D',
        price: 50,
        category: ['main']
    },
    {
        title: 'Salad',
        img: 'https://images.unsplash.com/photo-1505253716362-afaea1d3d1af?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2FsYWR8ZW58MHx8MHx8fDA%3D',
        price: 30,
        category: ['healthy']
    },
    {
        title: 'Burger and French Fries',
        img: 'https://images.unsplash.com/photo-1580554530913-3241d593478d?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bWFpbiUyMGZvb2R8ZW58MHx8MHx8fDA%3D',
        price: 30,
        category: ['fast-food']
    },
    {
        title: 'Big Mac',
        img: 'https://plus.unsplash.com/premium_photo-1683619761492-639240d29bb5?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZmFzdCUyMGZvb2R8ZW58MHx8MHx8fDA%3D',
        price: 40,
        category: ['fast-food']
    },
    {
        title: 'Salmon Veggie',
        img: 'https://images.unsplash.com/photo-1712334562767-5d366d0c40d9?q=80&w=3024&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        price: 60,
        category: ['main', 'healthy']
    },
    {
        title: 'Potato Soup',
        img: 'https://images.unsplash.com/photo-1476718406336-bb5a9690ee2a?q=80&w=2000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        price: 20,
        category: ['main', 'healthy']
    },
    {
        title: 'Sandwich Egg Boiled',
        img: 'https://images.unsplash.com/photo-1482049016688-2d3e1b311543?q=80&w=3110&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        price: 20,
        category: ['main', 'healthy']
    },
    {
        title: 'Spicy Lasagna',
        img: 'https://images.unsplash.com/photo-1614961908593-2c6bf2bdf2ba?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        price: 25,
        category: ['main']
    },
    {
        title: 'Cheese Pasta',
        img: 'https://images.unsplash.com/photo-1579631542720-3a87824fff86?q=80&w=3164&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        price: 35,
        category: ['main']
    },
    {
        title: 'Grilled Chiken Indonesian Sauce',
        img: 'https://images.unsplash.com/photo-1584949602334-4e99f98286a9?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        price: 25,
        category: ['main']
    },
    {
        title: 'Beef Sandwich',
        img: 'https://images.unsplash.com/photo-1481070414801-51fd732d7184?q=80&w=3024&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        price: 20,
        category: ['fast-food']
    },
    {
        title: 'Choco Milk Shake',
        img: 'https://images.unsplash.com/photo-1586985289071-36f62f55ce44?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        price: 15,
        category: ['fast-food', 'beverage']
    },
    {
        title: 'Strawberry Milk Shake Extra Ice Cream',
        img: 'https://images.unsplash.com/photo-1571183911579-687725adb5f8?q=80&w=3118&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        price: 20,
        category: ['fast-food', 'beverage']
    },
    {
        title: 'Coffe Latte',
        img: 'https://images.unsplash.com/photo-1689697971955-9368177cd795?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        price: 15,
        category: [ 'beverage']
    },
    {
        title: 'Americano Coffe',
        img: 'https://images.unsplash.com/photo-1697021833011-1d695df02e6b?q=80&w=3164&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        price: 13,
        category: [ 'beverage']
    },
    {
        title: 'Cupcake',
        img: 'https://images.unsplash.com/photo-1486427944299-d1955d23e34d?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        price: 5,
        category: [ 'cake']
    },
    {
        title: 'Dougnut',
        img: 'https://images.unsplash.com/photo-1582293041079-7814c2f12063?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        price: 7,
        category: [ 'cake']
    },
    {
        title: '6 Mix Piece Dougnut',
        img: 'https://images.unsplash.com/photo-1514517521153-1be72277b32f?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        price: 20,
        category: [ 'cake']
    },
    {
        title: 'Lemon Tea',
        img: 'https://images.unsplash.com/photo-1735989586413-3d3091b381e2?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fHw%3D',
        price: 5,
        category: [ 'beverage']
    },
    {
        title: 'Lemon Tea X-Large',
        img: 'https://images.unsplash.com/photo-1683170275059-302acae79168?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8aWNlJTIwdGVhfGVufDB8fDB8fHww',
        price: 15,
        category: [ 'beverage']
    },
    {
        title: 'Bagel',
        img: 'https://images.unsplash.com/photo-1542317979-b963a610f64d?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D',
        price: 20,
        category: [ 'cake']
    },
    {
        title: 'Bread Toast',
        img: 'https://images.unsplash.com/photo-1588484588657-0bbbee05132f?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        price: 23,
        category: [ 'cake']
    },
    {
        title: 'Croissant',
        img: 'https://images.unsplash.com/photo-1485597530180-9a3a2a4e0277?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGNyb2lzc2FudHxlbnwwfHwwfHx8MA%3D%3D',
        price: 27,
        category: [ 'cake']
    },


    
];
