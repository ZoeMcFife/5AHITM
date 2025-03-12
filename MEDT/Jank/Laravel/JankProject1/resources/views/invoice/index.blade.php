@extends('layouts.app')

@section('title', 'Invoices')

@section('content')
    <h2>Invoices</h2>
    <a href="{{ route('invoice.create') }}" class="btn btn-primary">Create New Invoice</a>

    @if(session('success'))
        <p style="color: green;">{{ session('success') }}</p>
    @endif

    <h2>New fancy table</h2>

    <div class="container">
        <h2>Laravel DataTable - Tuts Make</h2>
        <table class="table table-bordered" id="laravel_datatable">
            <thead>
            <tr>
                <th>Name</th>
                <th>Net Price</th>
                <th>Gross Price</th>
                <th>VAT</th>
                <th>User Clearing</th>
                <th>Clearing Date</th>
            </tr>
            </thead>
        </table>
    </div>

    <!--<hr>

    <h2>Old Table</h2>

    <table border="1" width="100%" style="margin-top: 20px;">
        <thead>
        <tr>
            <th>Name</th>
            <th>Net Price</th>
            <th>Gross Price</th>
            <th>VAT</th>
            <th>User Clearing</th>
            <th>Clearing Date</th>
            <th>Actions</th>
        </tr>
        </thead>
        <tbody>
        @foreach($invoices as $invoice)
            <tr>
                <td>{{ $invoice->name }}</td>
                <td>{{ $invoice->priceNet }}</td>
                <td>{{ $invoice->priceGross }}</td>
                <td>{{ $invoice->vat }}</td>
                <td>{{ $invoice->userClearing }}</td>
                <td>{{ $invoice->clearingDate }}</td>
                <td>
                    <a href="{{ route('invoice.show', $invoice) }}">View</a> |
                    <a href="{{ route('invoice.edit', $invoice) }}">Edit</a> |
                    <form action="{{ route('invoice.destroy', $invoice) }}" method="POST" style="display:inline;">
                        @csrf
                        @method('DELETE')
                        <button type="submit" onclick="return confirm('Are you sure?')">Delete</button>
                    </form>
                </td>
            </tr>
        @endforeach
        </tbody>-->
    </table>
@endsection

<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
<script src="https://cdn.datatables.net/1.10.21/js/jquery.dataTables.min.js"></script>


<script>
    $(document).ready( function ()
    {
       $('#laravel_datatable').DataTable(
           {
               processing: true,
               serverSide: true,
               ajax: "{{url('invoice-list')}}",
               columns: [
                   {data: 'name', name: 'Name'},
                   {data: 'priceNet', name: 'Price Net'},
                   {data: 'priceGross', name: 'Price Gross'},
                   {data: 'vat', name: 'VAT'},
                   {data: 'userClearing', name: 'Clearing'},
                   {data: 'clearingDate', name: 'Date'}
               ]
           }
       )
    });
</script>
