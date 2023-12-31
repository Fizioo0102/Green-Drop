package com.ssafy.common.service;

import com.ssafy.common.dto.response.BoardResponseDto;
import com.ssafy.common.entity.Board;
import com.ssafy.common.entity.Game;
import com.ssafy.common.repository.BoardRepository;
import com.ssafy.common.repository.GameRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.Collections;
import java.util.List;

@RequiredArgsConstructor
@Service
@Transactional(readOnly = true)
public class GameService {
    private final GameRepository gameRepository;
    private final BoardRepository boardRepository;

    @Transactional
    public void registGame(Long boardSeq){ //boardSeq를 통해 가져온 Board를 통해 Game 등록
//        Board board = gameRepository.findOneByBoard_BoardSeq(boardSeq);
        BoardResponseDto boardResponseDto = boardRepository.oneBoard(boardSeq);
        Board board = boardResponseDto.toEntity(boardSeq);//
        LocalDateTime nowTime = LocalDateTime.now();
        int year = nowTime.getYear();
        int month = nowTime.getMonthValue();
        int day = nowTime.getDayOfMonth();
        LocalDate date = LocalDate.of(year, month, day);
        Game game = Game.builder()
                .board(board)
                .question(board.getQuestion())
                .leftAnswer(board.getLeftAnswer())
                .rightAnswer(board.getRightAnswer())
                .date(date)
                .createdDate(nowTime)
                .leftCount(0)
                .rightCount(0)
                .nickname(board.getNickname())
                .build();
        gameRepository.save(game);
    }

    public List<Game> findAllGameList(){
        List<Game> gameList = gameRepository.findAllByOrderByCreatedDateDesc();
        return gameList;
    }

    public Game findGameByDate(LocalDate date){
        List<Game> gameList = gameRepository.findByDateOrderByCreatedDateAsc(date);
        if(gameList.size() == 0){ //오늘자 등록된 게임이 없다면
            return Game.builder().build();
        }
        return gameList.get(gameList.size()-1);
    }


}
