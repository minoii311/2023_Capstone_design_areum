package com.example.demo.service;

import com.example.demo.dto.SignInDto;
import com.example.demo.entity.Member;
import com.example.demo.repository.MemberJpaRepository;
import com.example.demo.security.TokenProvider;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class SignInService {

    private final MemberJpaRepository memberRepository;

    public String checkIdAndPw(SignInDto signInDto){
        Optional<Member> member = memberRepository.findByMemberId(signInDto.getId());

        if(member.isPresent()){
            TokenProvider tp = new TokenProvider();
            if(member.get().getMemberPw().equals(signInDto.getPw())) {
                return tp.create(signInDto.getId());
            }
        }
        return "fail";
    }
}
