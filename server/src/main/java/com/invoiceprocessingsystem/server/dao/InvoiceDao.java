package com.invoiceprocessingsystem.server.dao;

import com.invoiceprocessingsystem.server.model.Invoice;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface InvoiceDao extends JpaRepository<Invoice, Long> {

}
