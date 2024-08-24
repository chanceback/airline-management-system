package com.cback.airline.management.system.ticketClass;

import jakarta.persistence.*;

@Entity
@Table(name = "ticket_classes")
public class TicketClass {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long ticketClassId;

    @Column(name = "class_name", nullable = false, unique = true)
    private String className;

    @Column(nullable = false)
    private int upgradeCharge;

    public TicketClass(long ticketClassId, String className, int upgradeCharge) {
        this.ticketClassId = ticketClassId;
        this.className = className;
        this.upgradeCharge = upgradeCharge;
    }

    public TicketClass(String className, int upgradeCharge) {
        this.className = className;
        this.upgradeCharge = upgradeCharge;
    }

    protected TicketClass() {}

    public long getTicketClassId() {
        return ticketClassId;
    }

    public void setTicketClassId(long ticketClassId) {
        this.ticketClassId = ticketClassId;
    }

    public String getClassName() {
        return className;
    }

    public void setClassName(String className) {
        this.className = className;
    }

    public int getUpgradeCharge() {
        return upgradeCharge;
    }

    public void setUpgradeCharge(int upgradeCharge) {
        this.upgradeCharge = upgradeCharge;
    }

    @Override
    public String toString() {
        return "TicketClass{" +
                "ticketClassId=" + ticketClassId +
                ", className='" + className + '\'' +
                ", upgradeCharge=" + upgradeCharge +
                '}';
    }
}
