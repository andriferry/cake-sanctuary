<script setup lang="ts">
interface PaginationFetch {
    currentPage: number;
    currentPageSize: number;
}

interface Invoice {
    invoice: string;
    paymentStatus: string;
    totalAmount: string;
    paymentMethod: string;
}
const invoices = ref<Invoice[]>([
    {
        invoice: 'INV001',
        paymentStatus: 'Paid',
        totalAmount: '$250.00',
        paymentMethod: 'Credit Card',
    },
    {
        invoice: 'INV002',
        paymentStatus: 'Pending',
        totalAmount: '$150.00',
        paymentMethod: 'PayPal',
    },
    {
        invoice: 'INV003',
        paymentStatus: 'Unpaid',
        totalAmount: '$350.00',
        paymentMethod: 'Bank Transfer',
    },
    {
        invoice: 'INV004',
        paymentStatus: 'Paid',
        totalAmount: '$450.00',
        paymentMethod: 'Credit Card',
    },
    {
        invoice: 'INV005',
        paymentStatus: 'Paid',
        totalAmount: '$550.00',
        paymentMethod: 'PayPal',
    },
    {
        invoice: 'INV006',
        paymentStatus: 'Pending',
        totalAmount: '$200.00',
        paymentMethod: 'Bank Transfer',
    },
    {
        invoice: 'INV007',
        paymentStatus: 'Unpaid',
        totalAmount: '$300.00',
        paymentMethod: 'Credit Card',
    },
]);

const dataInvoice: Ref<Invoice[]> = ref([]);

const fetch = (page: number, pageSize: number) => {
    return new Promise<Invoice[]>((resolve, reject) => {
        const start = (page - 1) * pageSize;
        const end = start + pageSize;

        setTimeout(() => {
            resolve(invoices.value.slice(start, end));
        }, 100);
    });
};

const fetchData = async ({ currentPage, currentPageSize }: PaginationFetch) => {
    try {
        const data = await fetch(currentPage, currentPageSize);
        dataInvoice.value = data;
    } catch (error) {
        throw error;
    }
};

const dataPagination = ref(1);
</script>

<template>
    <Card title="Recent transaction" class="h-full">
        <CardContent>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead class="w-[100px]"> Order ID </TableHead>
                        <TableHead>Receipt No</TableHead>
                        <TableHead>Menu</TableHead>
                        <TableHead class=""> Collected/Cashier </TableHead>
                        <TableHead class=""> Date & Time </TableHead>
                        <TableHead class=""> Payment method </TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    <TableRow
                        v-for="(invoice, index) in dataInvoice"
                        :key="index">
                        <TableCell class="font-medium">
                            {{ invoice.invoice }}
                        </TableCell>
                        <TableCell>{{ invoice.paymentStatus }}</TableCell>
                        <TableCell>{{ invoice.paymentMethod }}</TableCell>
                        <TableCell class="">
                            {{ invoice.totalAmount }}
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </CardContent>

        <CardFooter class="justify-end">
            <Pagination
                v-model="dataPagination"
                :length="invoices.length"
                :page-size="2"
                @onChange="fetchData" />
        </CardFooter>
    </Card>
</template>
