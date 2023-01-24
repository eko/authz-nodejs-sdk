.PHONY: proto

proto:
	protoc \
		-I$(GOPATH)/src/github.com/eko/authz/backend/api/proto \
		--plugin=./node_modules/.bin/protoc-gen-ts_proto \
		--ts_proto_out=./lib/ \
		--ts_proto_opt=outputServices=nice-grpc,outputServices=generic-definitions,useExactTypes=false,esModuleInterop=true \
		api.proto
