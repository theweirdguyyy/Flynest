import React from 'react'
import {
    Document,
    Page,
    Text,
    View,
    StyleSheet
} from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: {
    padding: 0,
    fontSize: 12,
    fontFamily: 'Helvetica',
    lineHeight: 1.5,
  },
  header: {
    fontSize: 22,
    textAlign: "center",
    fontWeight: "bold",
    marginBottom: 5,
  },
  tagline: {
    fontSize: 12,
    textAlign: 'center',
    fontStyle: 'italic',
    color: 'gray',
    marginBottom: 20,
  },
  info: {
    marginBottom: 10,
  },
  bold:{
    fontWeight: 'bold',
  },
  label: {
    marginBottom: 3,
  },
  table: {
    display: 'table',
    width: 'auto',
    borderWidth: 1,
    borderColor: '#bfbfbf',
    borderStyle: 'solid',
    marginTop: 10,
  },
  tableRow: {
    flexDirection: 'row',
  },
  tableColHeader: {
    width: '70%',
    backgroundColor: '#eeeeee',
    padding: 6,
    fontWeight: 'bold',
    borderRightWidth: 1,
    borderColor: '#bfbfbf',
  },
  tableColHeaderRight: {
    width: '30%',
    borderColor: '#eeeeee',
    padding: 6,
    fontWeight: 'bold',
  },
  tableCol: {
    width: '30%',
    padding: 6,
    borderTopWidth: 1,
    borderColor: "#bfbfbf",
    textAlign: 'right',
  },
  tableColRight:{
    width: '30%',
    padding: 6,
    borderTopWidth: 1,
    borderColor: '#bfbfbf',
    textAlign: 'right',
  },
  totalRow: {
    backgroundColor: '#eeeeee',
    fontWeight: 'bold',
  },
});

const InvoiceDocument = (data) => {
    const {
        date,
        location,
        adults,
        children,
        tourGuide,
        dinner,
        tax,
        subTotal,
        total,
        transport,
        restaurant,
        hotel
    } = data || {};

    const fmtMoney = (v) => {
      const num = typeof v === 'number' ? v : Number(v);
      if (Number.isFinite(num)) return num.toFixed(2);
      return '0.00';
    };
    const safeText = (v) => (v ?? '');
    const safeInt = (v) => {
      const n = Number(v);
      return Number.isFinite(n) ? n : 0;
    };


  return (
    <>
      <Document>
        <Page size='A4' style={styles.page}>
          <Text style={styles.header}>FLYNEST BOOKING INVOICE</Text>
          <Text style={styles.tagline}>
            Thank you for choosing FLYNEST. We make your journey unforgettable!
          </Text>

          <View style={styles.info}>
            <Text style={styles.label}>
              <Text style={styles.bold}>Date:</Text>{date}
            </Text>
            <Text style={styles.label}>
              <Text style={styles.bold}>Location:</Text>{location}
            </Text>
          </View>

          <View style={styles.table}>
            <View style={styles.tableRow}>
              <Text style={styles.tableColHeader}>Item Description</Text>
              <Text style={styles.tableColHeaderRight}>Amount</Text>
            </View>

            <View style={styles.tableRow}>
              <Text style={styles.tableCol}>Adults</Text>
              <Text style={styles.tableColRight}>{safeInt(adults)}</Text>
            </View>

            <View style={styles.tableRow}>
              <Text style={styles.tableCol}>Children</Text>
              <Text style={styles.tableColRight}>{safeInt(children)}</Text>
            </View>

            <View style={styles.tableRow}>
              <Text style={styles.tableCol}>Tour Guide</Text>
              <Text style={styles.tableColRight}>${fmtMoney(tourGuide)}</Text>
            </View>

            <View style={styles.tableRow}>
              <Text style={styles.tableCol}>Dinner</Text>
              <Text style={styles.tableColRight}>${fmtMoney(dinner)}</Text>
            </View>


            {/* Optional Add-ons */}
            {transport?.title && (
              <View style={styles.tableRow}>
                <Text style={styles.tableCol}>Transport - {safeText(transport.title)}</Text>
                <Text style={styles.tableColRight}>${fmtMoney(transport?.cost)}</Text>
              </View>
            )}
            {restaurant?.title && (
              <View style={styles.tableRow}>
                <Text style={styles.tableCol}>Restaurant - {safeText(restaurant.title)}</Text>
                <Text style={styles.tableColRight}>${fmtMoney(restaurant?.cost)}</Text>
              </View>
            )}
            {hotel?.title && (
              <View style={styles.tableRow}>
                <Text style={styles.tableCol}>Hotel - {safeText(hotel.title)}</Text>
                <Text style={styles.tableColRight}>${fmtMoney(hotel?.cost)}</Text>
              </View>
            )}

            <View style={styles.tableRow}>
                <Text style={styles.tableCol}>Sub Total</Text>
                <Text style={styles.tableColRight}>${fmtMoney(subTotal)}</Text>
            </View>

            <View style={styles.tableRow}>
                <Text style={styles.tableCol}>VAT Tax</Text>
                <Text style={styles.tableColRight}>${fmtMoney(tax)}</Text>
            </View>

            <View style={[styles.tableRow, styles.totalRow]}>
                <Text style={styles.tableCol}>Total Amount</Text>
                <Text style={styles.tableColRight}>${fmtMoney(total)}</Text>
            </View>
          </View>
        </Page>
      </Document>
    </>
  )
}




export default InvoiceDocument
