package com.ssafy.common.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.*;

import java.io.Serializable;
import java.time.LocalDateTime;

@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor
@Builder
@Entity
@Table(name = "reservation")
public class Reservation implements Comparable<Reservation>, Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "reservation_seq")
    private Long reservationSeq;

    @JsonBackReference(value = "board-reservation")
    @ManyToOne(targetEntity = Board.class, fetch = FetchType.LAZY)
    @JoinColumn(name = "board_seq", referencedColumnName = "board_seq")
    private Board board;

    @Column(name = "datetime")
    private LocalDateTime dateTime;

    @Column(name = "manager_id")
    private String managerId;

    @Override
    public int compareTo(Reservation o) {
        return this.dateTime.compareTo(o.dateTime);
    }
}
