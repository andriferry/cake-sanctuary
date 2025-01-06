<script setup lang="ts">
import { invoices } from '@/@fake/data';

interface PaginationFetch {
    currentPage: number;
    currentPageSize: number;
}

interface Invoice {
    invoice: string;
    paymentStatus: 'Pending' | 'Unpaid' | 'Paid';
    totalAmount: string;
    paymentMethod: string;
    date: string;
    collected: string;
}

const dataInvoice: Ref<Invoice[]> = ref([]);
const dataPagination = ref(1);

const fetch = (page: number, pageSize: number) => {
    return new Promise<Invoice[]>((resolve, reject) => {
        const start = (page - 1) * pageSize;
        const end = start + pageSize;

        setTimeout(() => {
            resolve(invoices.slice(start, end));
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

const badgeRenderColor = (value: Invoice['paymentStatus']) => {
    switch (value) {
        case 'Paid':
            return 'success';
            break;
        case 'Unpaid':
            return 'destructive';
            break;
        case 'Pending':
            return 'secondary';
            break;

        default:
            break;
    }
};
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
                        <TableHead class="text-center">
                            Payment method
                        </TableHead>
                        <TableHead class=""> Amount </TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    <TableRow
                        v-for="(invoice, index) in dataInvoice"
                        :key="index">
                        <TableCell class="font-medium text-secondary">
                            {{ invoice.invoice }}
                        </TableCell>
                        <TableCell>
                            <Badge
                                :variant="
                                    badgeRenderColor(invoice.paymentStatus)
                                ">
                                {{ invoice.paymentStatus }}
                            </Badge>
                        </TableCell>
                        <TableCell class="text-secondary">{{
                            invoice.paymentMethod
                        }}</TableCell>
                        <TableCell class="text-secondary">
                            {{ invoice.collected }}
                        </TableCell>
                        <TableCell class="text-secondary">
                            {{ useDateFormat(invoice.date, 'DD MMMM YYYY') }}
                        </TableCell>
                        <TableCell class="text-center text-secondary">
                            <div class="w-full px-5">
                                <div
                                    class="bg-secondary/10 font-medium p-1 rounded-md">
                                    {{ invoice.paymentMethod }}
                                </div>
                            </div>
                        </TableCell>
                        <TableCell class="text-secondary">
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
                :page-size="5"
                class="justify-end"
                @onChange="fetchData" />
        </CardFooter>
    </Card>
</template>
