@extends('layouts.app')

@section('title', 'Invoices')

@section('content')
    <h2>Invoices</h2>
    <a href="{{ route('invoice.create') }}" class="btn btn-primary">Create New Invoice</a>

    @if(session('success'))
        <p style="color: green;">{{ session('success') }}</p>
    @endif

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
        </tbody>
    </table>
@endsection
