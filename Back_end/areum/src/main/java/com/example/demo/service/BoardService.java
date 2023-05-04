package com.example.demo.service;


import com.example.demo.dto.BoardDto;
import com.example.demo.entity.Board;
import com.example.demo.entity.Member;
import com.example.demo.repository.BoardJpaRepository;
import com.example.demo.repository.MemberJpaRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class BoardService {

    private final BoardJpaRepository boardRepository;

    public String viewBoard(BoardDto boardDto){
        Optional<Board> board = boardRepository.findById(boardDto.getId());
        return null; //should be fixed
    }

}